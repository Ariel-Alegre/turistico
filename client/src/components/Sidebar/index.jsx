import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { StarIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDropzone } from "react-dropzone";
import Autocomplete from "@mui/material/Autocomplete";
import { dataPersonal, createPost } from "../../redux/action";
import Modal from "@mui/material/Modal";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Upload, } from "antd";
import BeatLoader from "react-loading";

const steps = ["Caracterisitcas", "Fotos", "Publicar"];
const validate = (input) => {
  let errors = {};

  if (!input.title) {
    errors.title = "el nombre es requerido";
  }

  if (!input.description) {
    errors.description = "la descripcion es requerido";
  }

  if (input.status !== "Público") {
    if (!input.price) {
      errors.price = "El precio es requerido";
    }
    
    if (!input.stay) {
      errors.stay = "La estadía es requerida";
    }
  }

  if (!input.summary) {
    errors.summary = "El resumen es requerido";
  }

  return errors;
};

const validateImage = (input) => {
  let errors = {};

  if (input.imageFile.length >= 4) {
    errors.imageFile = "Debes subir al menos 4 imágenes";
  }

  if (!input.imageFile) {
    errors.imageFile = "Debes subir al menos 4 imágenes";
  }

  return errors;
};


export default function FormStepper() {
  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [show, setShow] = useState({
    title: "",
    price: "",
    stay: "",
    imageFile: [],
    summary: "",
    description: "",
    status: "",
  });


  const handleNext = (event) => {
    const newErrors = validate(show); // Validar los campos
    console.log("New errors:", newErrors); // Agregar este log

    setErrors(newErrors);

    const form = event.currentTarget;
    console.log("Form validity:", form.checkValidity()); // Agregar este log
 
   
    if (form.checkValidity() === false || Object.keys(newErrors).length > 0) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true); // Mostrar mensajes de error en los campos requeridos
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setValidated(false); // Reiniciar la validación para el siguiente paso
    }
  };

  const handleNextImage = () => {
    const newErrors = validateImage(show); // Validar las imágenes
    console.log("New errors:", newErrors);
  
    if (Object.keys(newErrors).length === 0 && show.images.length >= 4) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      alert("Debes subir al menos 4 imágenes correctamente.");
    }
  };
  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        const formData = new FormData();
        formData.append("title", show.title);
        formData.append("price", show.price);
        formData.append("stay", show.stay);
        formData.append("summary", show.summary);
        formData.append("description", show.description);
      formData.append("status", show.status);


      show.images.forEach((image, index) => {
        formData.append("imageFile", image);
      });
      setIsLoading(true);
      const createdPost = await dispatch(createPost(formData, token));
      console.log("Post creado exitosamente:", createdPost);
      
      const newErrors = validate(show); // Validar los campos
      setErrors(newErrors); // Actualizar los errores

      // Puedes realizar alguna navegación o mostrar un mensaje de éxito aquí
    } catch (error) {
      console.error("Error al crear el post:", error);
      // Manejo de error, muestra un mensaje de error, etc.
    } 
    setTimeout(async () => {
      navigate('/')
    }, 1000)
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
  const handleStay = (event) => {
    const newValue = event.target.value;
    setShow((prevState) => ({
      ...prevState,
      stay: newValue,
    }));
  };
  const handleStatus = (event) => {
    const newValue = event.target.value;
    setShow((prevState) => ({
      ...prevState,
      status: newValue,
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
/*   const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancelMiniImage = () => setPreviewOpen(false);
  const handlePreviewMiniImage = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChangeMiniImage = ({ fileList: newFileList }) =>
    setShow(newFileList); */

    

  const options = ["Por noche", "Por semana", "Por mes"];
  const status = ["Público", "Privado"];

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <Form noValidate validated={validated}>
              <Form.Group as={Col} md="15" controlId="validationCustomStatus">
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  defaultValue={show.status}
                  onChange={handleStatus}
                  aria-label="Estado"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  {status.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor seleccione una opción.
                </Form.Control.Feedback>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} md="15" controlId="validationCustomTitle">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Titulo"
                    defaultValue={show.title}
                    onChange={handleTittle}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor se requiere un titulo.
                  </Form.Control.Feedback>
                </Form.Group>

                {show.status === "Privado" ? (
                  <Form.Group
                    as={Col}
                    md="15"
                    controlId="validationCustomPrecio"
                  >
                    <Form.Label>Precio</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        aria-label="Amount (to the nearest dollar)"
                        type="number"
                        defaultValue={show.price}
                        onChange={handlePrice}
                        required={show.status === "Privado"} 
                      />
                      <InputGroup.Text>.00</InputGroup.Text>
                      <Form.Control.Feedback type="invalid">
                        Por favor se requiere un precio.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                ) : (
                  <div></div>
                )}
                {show.status === "Privado" ? (
                  <Form.Group as={Col} md="15" controlId="validationCustomStay">
                    <Form.Label>Estadia</Form.Label>
                    <Form.Select
                      defaultValue={show.stay}
                      onChange={handleStay}
                      aria-label="Estadia"
                      required={show.status === "Privado"} 
                    >
                      <option value="">Seleccione una opción</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Por favor seleccione una opción de estadía.
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : (
                  <div></div>
                )}
              </Row>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  md="15"

                  controlId="validationCustomSummary"
                >
                  <Form.Label>Resumen del lugar.</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    defaultValue={show.summary}
                    onChange={handleSummary}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="validationCustomDescription"
                  required
                >
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    defaultValue={show.description}
                    onChange={handleDescription}
                  />
                </Form.Group>
              </Row>
            </Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                justifyContent: "center",
                gap: "60px",
                bottom: "30px",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                regresar
              </Button>
              <Box />

              <Button
                onClick={ handleNext }
                sx={{
                  backgroundColor: "#05A1A1",
                  color: "white",
                  ":hover": { backgroundColor: "#05A1A1", color: "white" },
                }}
                type="button"
              >
                Siguiente
              </Button>
            </Box>
          </div>
        );
      case 1:
        return (
          <>
            <div>
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
                <input {...getInputProps()} required />
                {isDragActive ? (
                  <p>Suelta las imágenes aquí...</p>
                ) : (
                  <div>
                    <p>
                      Arrastra y suelta las imágenes aquí o haz clic para
                      seleccionar.
                    </p>
                    <span>Puedes subir hasta 100 imágenes.</span>
                  </div>
                )}
              </div>
              {errors.imageFile && (
                <div>
                  <p>{errors.imageFile}</p>
                </div>
              )}

              <div>
                {show.images &&
                  show.images.map((photo) => <img src={photo} alt="" />)}
                <div className="prev-mini">
                  {show.images &&
                    show.images.map((file, index) => (
                      <div key={index}>
                        <div className="btn-x">
                          <button
                            type="button"
                            onClick={() => handleRemove(index)}
                          >
                            <strong>X</strong>
                          </button>
                        </div>
                        {file && (
                          <Upload listType="picture-card" disabled>
                            <img
                              alt={`Preview ${index}`}
                              src={URL.createObjectURL(file)}
                            />
                          </Upload>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                justifyContent: "center",
                gap: "60px",
                bottom: "30px",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                regresar
              </Button>
              <Box />

              <Button
                onClick={handleNextImage}
                sx={{
                  backgroundColor: "#05A1A1",
                  color: "white",
                  ":hover": { backgroundColor: "#05A1A1", color: "white" },
                }}
                type="button"
              >
                Siguiente
              </Button>
            </Box>
          </>
        );
      case 2:
        return (

            <div className= "responsive-phone-tablet">
              {isLoading ? (
  <div className="loading-overlay">
    <div>
          <BeatLoader color="#05A1A1" size="80" />

    </div>
  </div>
): (

  
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
                  {show.status === "Privado" ? (

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
                      
                      <div className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserva">
                      Reservar
                      </div>
                      </div>
                      ):     <div className="mt-4 lg:row-span-3 lg:mt-0">
                      <p className="text-3xl tracking-tight text-gray-900">
                      <div>
                      <div className="space-y-6">
                        {inputValue ? (
                          <h3 className="text-base text-gray-900">
                            {inputValue}
                          </h3>
                        ) : (
                          <h3 className="text-base text-gray-900"></h3>
                        )}
                      </div>
                    </div>
                  </p>
                  
                  <div className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserva">
                   Gratis
                   </div>
                   </div>}
                   
                   
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
                      <p className="text-sm text-gray-600 ">
                      {show.description}
                      </p>
                      </div>
                      </div>
                      </div>
                      
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      pt: 2,
                      justifyContent: "center",
                      gap: "60px",
                      bottom: "30px",
                    }}
                    >
                    <Button
                    color="inherit"
                    disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      >
                      regresar
                      </Button>
                      <Box />
                      <Button
                      sx={{
                        backgroundColor: "#05A1A1",
                        color: "white",
                        ":hover": {
                          backgroundColor: "#05A1A1",
                          color: "white",
                        },
                      }}
                      type="submit"
                    >
                      Publicar
                    </Button>
                  </Box>
                  </div>
              </div>
            </div>
          )}
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <Box>
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            marginBottom: 5,
            matginTop: 5,
            backgroundColor: "#05A1A1",
            color: "white",
            ":hover": { backgroundColor: "#05A1A1", color: "white" },
          }}
        >
          Cancelar
        </Button>
      </Link>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography sx={{ display: "grid", justifyContent: "center", mt: 5 }}>
        <form action="" method="post" onSubmit={handleSubmit}>

          {renderForm(activeStep)}
        </form>
      </Typography>
    </Box>
  );
}
