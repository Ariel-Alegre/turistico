import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { StarIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDropzone } from "react-dropzone";
import Autocomplete from "@mui/material/Autocomplete";
import { dataPersonal, createTuristicPostWithImages } from "../redux/action";



const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function FormStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const options = ["Por noche", "Por semana", "Por mes"];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);
  const [show, setShow] = useState({
    title: "",
    price: "",
    stay: "",
    images: [],
    summary: "",
    description: "",
  });
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  const handleImage = useCallback((acceptedFiles) => {
    setShow((prevState) => ({
      ...prevState,
      images: Array.isArray(prevState.images)
        ? [...prevState.images, ...acceptedFiles]
        : acceptedFiles, // Agregamos las nuevas imágenes al array existente
    }));
  }, []);
  const onDrop = useCallback(
    (acceptedFiles) => {
      handleImage(acceptedFiles); // Llamamos a la función handleImage para manejar los archivos aceptados
    },
    [handleImage, dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
 
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createTuristicPostWithImages(show, show.images));
      // Puedes realizar alguna acción aquí después de la publicación exitosa, si es necesario.
    } catch (error) {
      console.error(error);
    }
  };

  const handleTittle = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };
  const handleSummary = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      summary: e.target.value,
    }));
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handlePrice = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };
  const handleStay = (event, newValue) => {
    setShow((prevState) => ({
      ...prevState,
      stay: newValue, // Usamos el valor seleccionado directamente
    }));
  };

  const handleRemove = (index) => {
    const newFilesArray = [...show.images];
    newFilesArray.splice(index, 1);
    setShow((prevState) => ({
      ...prevState,
      images: newFilesArray,
    }));
  };
 
  const renderForm = step => {
    switch (step) {
      case 0:
        return (
        <>
                  <Box className="sidebar-container" noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Titulo"
                  variant="outlined"
                   onChange={handleTittle} 
                  value={show.title}
                  name="title"
                  sx={{
                    background: "#fff",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Precio"
                  variant="outlined"
                  onChange={handlePrice} 
                  value={show.price}
                  name="price"
                  sx={{
                    background: "#fff",
                  }}
                />
                <div>
                  <Autocomplete
                    value={show.stay}
                    onChange={handleStay} // Usamos la función handleStay para manejar el cambio de valor
                    id="controllable-states-demo"
                    options={options}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Estadia"
                        sx={{
                          background: "#fff",
                        }}
                      />
                    )}
                  />
                </div>
              
            

                <div>
                  <textarea
                    id="outlined-basic"
                    placeholder="Resumen"
                   onChange={handleSummary}
                    value={show.summary} 
                    name="summary"
                    rows={10}
                    className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <textarea
                    id="outlined-basic"
                    placeholder="Descripción"
                     onChange={handleDescription}
                    value={show.description} 
                    name="description"
                    rows={10}
                    className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
           
              </Box>
            </>
        );
      case 1:
        return (
          <div
          {...getRootProps()}
          style={{
            border: "2px dashed #ddd",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: isDragActive ? "#f8f8f8" : "white",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Suelta las imagenes aquí...</p>
          ) : (
            <div>
              <p>
                Arrastra y suelta las imagenes aquí o haz clic para
                seleccionar.
              </p>
              <span>Puedes subir hasta 12 imagenes.</span>
            </div>
          )}
              <div>
                  {show.images &&
                    show.images.map((photo) => <img src={photo} alt="" />)}
                  <div className="prev-mini">
                    {show.images &&
                      show.images.map((file, index) => (
                        <div key={index}>
                          {file && (
                            <div>
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index}`}
                                className="img-mini"
                              />
                            </div>
                          )}
                          <div className="btn-x">
                            <button
                              type="button"
                            onClick={() => handleRemove(index)} 
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div> 
        </div>
        );
      case 2:
        return (
          <div className="responsive-phone-tablet">
          <div className="bg-white">
            <div className="pt-6">
              {show.title ? (
                <h1 className="title">{show.title}</h1>
              ) : (
                <h1 className="title">Titulo</h1>
              )}
  
              {/* Image gallery */}
              {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <div>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                      {show.images && show.images.length > 0 ? (
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                          <img
                            src={URL.createObjectURL(show.images[0])}
                            alt={show.error}
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                      ) : (
                        <div className="x">+</div>
                      )}
  
                      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        {show.images && show.images.length > 1 ? (
                          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                            <img
                              src={URL.createObjectURL(show.images[1])}
                              alt={show.images[1].alt}
                              className="h-full w-full object-cover object-center hover-image"
                            />
                          </div>
                        ) : (
                          <div className="x">+</div>
                        )}
  
                        {show.images && show.images.length > 2 ? (
                          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                              src={URL.createObjectURL(show.images[2])}
                              alt={show.images[2].alt}
                              className="h-full w-full object-cover object-center hover-image"
                            />
                          </div>
                        ) : (
                          <div className="x"> +</div>
                        )}
                      </div>
                      {show.images && show.images.length > 3 ? (
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                          <img
                            src={URL.createObjectURL(show.images[3])}
                            alt={show.images[3].alt}
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                      ) : (
                        <div className="x">+</div>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              ))}
  
              {/* show info */}
              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Lugar para quedarse. Anfitrión: {datapersonal.name}
                  </h1>
                </div>
  
                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <p className="text-3xl tracking-tight text-gray-900">
                    {show.price ? (
                      <span>$ {show.price}</span>
                    ) : (
                      <span>precio</span>
                    )}
                    <div>
                      <div className="space-y-6">
                        {inputValue ? (
                          <h3 className="text-base text-gray-900">
                            {inputValue}
                          </h3>
                        ) : (
                          <h3 className="text-base text-gray-900">Estadia</h3>
                        )}
                      </div>
                    </div>
                  </p>
  
                  <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserva">
                    Reservar
                  </button>
                </div>
  
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {show.summary && show.summary}
                      </p>
                    </div>
                  </div>
  
                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Descripción
                    </h2>
  
                    <div className="mt-4 space-y-6 des">
                      <p className="text-sm text-gray-600 ">{show.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography sx={{ mt: 2, mb: 1 }}></Typography>
      {renderForm(activeStep)}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
