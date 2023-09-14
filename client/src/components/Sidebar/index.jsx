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
import { createPost } from "../../redux/action";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Upload, Space, DatePicker  } from "antd";
import BeatLoader from "react-loading";
import MenuItem from "@mui/material/MenuItem";
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { Container } from 'react-bootstrap';


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
  const navigate = useNavigate();
  const [show, setShow] = useState({
    title: "",
    price: "",
    stay: "",
    imageFile: [],
    summary: "",
    description: "",
    status: "",
    continent: "",
    country: "",
    attention: "",
    hoursInitial: "",
    ampmInitial: "",
    hoursFinally: "",
    ampmFinally: "",
    selectedDates: []
  });
  const [calendarOpen, setCalendarOpen] = useState(false);

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
      formData.append("continent", show.continent);

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
      navigate("/");
    }, 1000);
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
  const handleContinent = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      continent: e.target.value,
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

  const handleAttention = (event) => {
    const newValue = event.target.value;
    setShow((prevState) => ({
      ...prevState,
      attention: newValue,
    }));
  };

  const handleHoursinitial = (event) => {
    const newValue = event.target.value;
    setShow((prevState) => ({
      ...prevState,
      hoursInitial: newValue,
    }));
  };
  const handleAMPMinitial = (event) => {
    const newValue = event.target.value;
    setShow((prevState) => ({
      ...prevState,
      ampmInitial: newValue,
    }));
  };

  dayjs.locale('es');
  const handleDateSelect = (date) => {

    const updatedSelectedDates = [...show.selectedDates];
    const dateIndex = updatedSelectedDates.findIndex((d) => dayjs(d).isSame(date, 'day'));

    if (dateIndex !== -1) {
      // Si la fecha ya está seleccionada, la deselecciona
      updatedSelectedDates.splice(dateIndex, 1);
    } else {
      // Si la fecha no está seleccionada, la agrega
      updatedSelectedDates.push(date);
    }

    setShow({
      ...show,
      selectedDates: updatedSelectedDates
    });
  };
  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen); // Invierte el estado del calendario (abrir/cerrar)
  };
  const disabledDate = (current) => {
    // Comprueba si la fecha actual está deshabilitada
    const isDisabled = show.selectedDates.some((date) => dayjs(date).isSame(current, 'day'));

    // Invierte la deshabilitación (si está deshabilitada, se habilita, y viceversa)
    return isDisabled;
  };

  const options = ["Por noche", "Por semana", "Por mes"];
  const status = ["Público", "Privado"];
  const continent = ["América", "Europa", "Asia", "África", "Oceanía"];
  const daysatention = [
    "lunes a lunes",
    "lunes a martes",
    "lunes a  miercoles",
    "lunes a jueves",
    "lunes a Viernes",
    "lunes a Sabado",
    "lunes a domingo",
  ];
  const america = [
    "Canadá",
    "Estados Unidos",
    "México",
    "Belice",
    "Costa Rica",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Nicaragua",
    "Panamá",
    "Antigua y Barbuda",
    "Bahamas",
    "Barbados",
    "Cuba",
    "Dominica",
    "Granada",
    "Haití",
    "Jamaica",
    "Puerto Rico",
    "República Dominicana",
    "San Cristóbal y Nieves",
    "Santa Lucía",
    "San Vicente y las Granadinas",
    "Trinidad y Tobago",
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Perú",
    "Surinam",
    "Uruguay",
    "Venezuela",
  ];

  const europa = [
    "Albania",
    "Alemania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaiyán",
    "Bélgica",
    "Bielorrusia",
    "Bosnia y Herzegovina",
    "Bulgaria",
    "Chipre",
    "Ciudad del Vaticano",
    "Croacia",
    "Dinamarca",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estonia",
    "Finlandia",
    "Francia",
    "Georgia",
    "Grecia",
    "Hungría",
    "Irlanda",
    "Islandia",
    "Italia",
    "Kazajistán",
    "Letonia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Malta",
    "Moldavia",
    "Mónaco",
    "Montenegro",
    "Noruega",
    "Países Bajos",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "República Checa",
    "Rumania",
    "Rusia",
    "San Marino",
    "Serbia",
    "Suecia",
    "Suiza",
    "Turquía",
    "Ucrania",
  ];
  const asia = [
    "Afganistán",
    "Arabia Saudita",
    "Armenia",
    "Azerbaiyán",
    "Bangladesh",
    "Baréin",
    "Birmania (Myanmar)",
    "Brunéi",
    "Bután",
    "Camboya",
    "Catar",
    "China",
    "Chipre",
    "Corea del Norte",
    "Corea del Sur",
    "Emiratos Árabes Unidos",
    "Filipinas",
    "Georgia",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Israel",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kirguistán",
    "Kuwait",
    "Laos",
    "Líbano",
    "Malasia",
    "Maldivas",
    "Mongolia",
    "Nepal",
    "Omán",
    "Pakistán",
    "Palestina",
    "Qatar",
    "Rusia",
    "Singapur",
    "Siria",
    "Sri Lanka",
    "Tailandia",
    "Tayikistán",
    "Timor Oriental",
    "Turkmenistán",
    "Turquía",
    "Uzbekistán",
    "Vietnam",
    "Yemen",
  ];

  const africa = [
    "Angola",
    "Argelia",
    "Benín",
    "Botsuana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Camerún",
    "Chad",
    "Comoras",
    "Congo",
    "Costa de Marfil",
    "Egipto",
    "Eritrea",
    "Esuatini (Suazilandia)",
    "Etiopía",
    "Gabón",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Guinea Ecuatorial",
    "Kenia",
    "Lesoto",
    "Liberia",
    "Libia",
    "Madagascar",
    "Malaui",
    "Malí",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "Mozambique",
    "Namibia",
    "Níger",
    "Nigeria",
    "República Centroafricana",
    "República Democrática del Congo",
    "Ruanda",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leona",
    "Somalia",
    "Sudáfrica",
    "Sudán",
    "Sudán del Sur",
    "Tanzania",
    "Togo",
    "Túnez",
    "Uganda",
    "Yibuti",
    "Zambia",
    "Zimbabue",
  ];
  const oceania = [
    "Australia",
    "Fiyi",
    "Islas Marshall",
    "Islas Salomón",
    "Kiribati",
    "Micronesia",
    "Nauru",
    "Nueva Zelanda",
    "Palaos",
    "Papúa Nueva Guinea",
    "Samoa",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ];
  //retocar 

  const [word, setWord] = useState('');
  const defaultWords = ['cocina', 'baño', 'patio', 'terraza'];
  const [words, setWords] = useState([...defaultWords]);
  const [inputVisible, setInputVisible] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [infoImportant, setInfoImportant] = useState([]);


  React.useEffect(() => {
    setWords([...defaultWords]);
  }, []);

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const handleAddWord = () => {
    if (word.trim() !== '') {
      setWords([...words, word]);
      setWord('');
      setInputVisible(false); // Oculta el campo de entrada después de agregar
    }
  };

  const handleDeleteWord = (index) => {
    const updatedWords = [...words];
    updatedWords.splice(index, 1);
    setWords(updatedWords);
  };

  const toggleInput = () => {
    setInputVisible(!inputVisible);
    setWord(''); // Limpia el campo de entrada cuando se oculta
  };

  const handleCheckboxChange = (index) => {
    const updatedSelectedWords = [...selectedWords];
    if (updatedSelectedWords.includes(index)) {
      updatedSelectedWords.splice(updatedSelectedWords.indexOf(index), 1);
    } else {
      updatedSelectedWords.push(index);
    }
    setSelectedWords(updatedSelectedWords);
  };

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="post-container"> 
<div className="box-container">


            <Form noValidate validated={validated}>
            <Row className="mb-3">

              <Form.Group as={Col} className="mb-3" controlId="validationCustomStatus">
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
                  </Row>
              <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="validationCustomStatus">
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
              </Row>

              <Row className="mb-3">


                {show.status === "Privado" ? (

                  <Form.Group
                    as={Col}
                    
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
                  </Row>


                {show.status === "Privado" ? (
                  <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >
            <Row className="mb-3">
                    <Form.Label>Continente</Form.Label>
                    <Form.Select
                      defaultValue={show.continent}
                      onChange={handleContinent}
                      aria-label="Continente"
                      required={show.status === "Privado"}
                      className="form-control mb-3"
                    >
                      <option value="">Seleccione una opción</option>
                      {continent.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Por favor seleccione un continente.
                    </Form.Control.Feedback>
                    </Row>
                    {show.continent === "América" ? (
                      <div>
            <Row className="mb-3">

                        <Form.Label>País</Form.Label>
                        <Form.Select
                          defaultValue={show.stay}
                          onChange={handleStay}
                          aria-label="Estadia"
                          required={show.status === "Privado"}
                          className="mb-3"
                        >
                          <option value="">Seleccione una opción</option>
                          {america.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor seleccione un país.
                        </Form.Control.Feedback>
                          </Row>
                      </div>
                    ) : (
                      <div>
                        {/* Aquí puedes agregar contenido adicional que se mostrará cuando no se seleccione "América" */}
                      </div>
                    )}

                    {show.continent === "Europa" ? (
                      <div>
            <Row className="mb-3">
            <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >

                        <Form.Label>País</Form.Label>
                        <Form.Select
                          defaultValue={show.stay}
                          onChange={handleStay}
                          aria-label="Estadia"
                          required={show.status === "Privado"}
                          className="mb-3"
                          >
                          <option value="">Seleccione una opción</option>
                          {europa.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor seleccione un país.
                        </Form.Control.Feedback>
                        </Form.Group>
                          </Row>
                      </div>
                    ) : (
                      <div>
                        {/* Aquí puedes agregar contenido adicional que se mostrará cuando no se seleccione "América" */}
                      </div>
                    )}
                    {show.continent === "Asia" ? (
                      <div>
            <Row className="mb-3">
            <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >


                        <Form.Label>País</Form.Label>
                        <Form.Select
                          defaultValue={show.stay}
                          onChange={handleStay}
                          aria-label="Estadia"
                          required={show.status === "Privado"}
                          className="mb-3"
                          >
                          <option value="">Seleccione una opción</option>
                          {asia.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor seleccione un país.
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                      </div>
                    ) : (
                      <div>
                        {/* Aquí puedes agregar contenido adicional que se mostrará cuando no se seleccione "América" */}
                      </div>
                    )}

                    {show.continent === "África" ? (
<Row className="mb-3">
                      <div>

            <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >
                        <Form.Label>País</Form.Label>
                        <Form.Select
                          defaultValue={show.stay}
                          onChange={handleStay}
                          aria-label="Estadia"
                          required={show.status === "Privado"}
                          className="mb-3"
                        >
                          <option value="">Seleccione una opción</option>
                          {africa.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor seleccione un país.
                        </Form.Control.Feedback>
                              </Form.Group>
                      </div>
                    </Row>
                    ) : (
                      <div>
                        {/* Aquí puedes agregar contenido adicional que se mostrará cuando no se seleccione "América" */}
                      </div>
                    )}

                    {show.continent === "Oceanía" ? (
                      <div>
            <Row className="mb-3">
            <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >

                        <Form.Label>País</Form.Label>
                        <Form.Select
                          defaultValue={show.stay}
                          onChange={handleStay}
                          aria-label="Estadia"
                          required={show.status === "Privado"}
                          className="mb-3"
                        >
                          <option value="">Seleccione una opción</option>
                          {oceania.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor seleccione un país.
                        </Form.Control.Feedback>
                          </Form.Group>
                          </Row>
                      </div>
                    ) : (
                      <div>
                        {/* Aquí puedes agregar contenido adicional que se mostrará cuando no se seleccione "América" */}
                      </div>
                    )}


            <Row className="mb-3">
            <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >

                    <Form.Label>Dias y horarios de atención</Form.Label>
                    <Form.Select
                      defaultValue={show.attention}
                      onChange={handleAttention}
                      aria-label="Continente"
                      required={show.status === "Privado"}
                      className="mb-3"
                      >
                      <option value="">Seleccione una opción</option>
                      {daysatention.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
              </Form.Group>
                    </Row>


                    {show.attention ? (
                      
                        <Row className="mb-3">
                      <div className="hours-container">
                   
                        <TextField
                          id="hours"
                          label="Abre"
                          type="time"
                          className="mb-3"
                          value={show.hoursInitial}
                          onChange={handleHoursinitial}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // paso en segundos (5 minutos)
                          }}
                          />
                 
                       <h5>Hasta</h5>
                       <TextField
                          id="hours"
                          label="Cierre"
                          type="time"
                          value={show.hoursInitial}
                          onChange={handleHoursinitial}
                          className="mb-3"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // paso en segundos (5 minutos)
                          }}
                          />
                   
                      </div>
                              </Row>
                            
                            ) : (
                              <div></div>
                              )}
            <Row className="mb-3">
            <Form.Group
                  as={Col}
                  className="mb-3"
                    controlId="validationCustomContinent"
                  >

                    <Form.Label>Estadia</Form.Label>
                    <Form.Select
                      defaultValue={show.stay}
                      onChange={handleStay}
                      aria-label="Estadia"
                      required={show.status === "Privado"}
                      className="mb-3"
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
                    </Row>

                  </Form.Group>
                ) : (
                  <div></div>
                )}
              <Row className="mb-3">
                <Form.Group
                 className="mb-3"
                 
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

            <div className="action-private">

            <Row className="mb-3">
       
{show.status === "Privado" ? (
  <Space direction="vertical" size={12}>
      <Button onClick={toggleCalendar}>Abrir/Cerrar Calendario</Button>
              
      <DatePicker
        open={calendarOpen}
        onOpenChange={() => setCalendarOpen(true)}
        onChange={handleDateSelect}
        disabledDate={disabledDate}
        showToday={false}
        />
        
    </Space>
        ) : (
          <div></div>
          )}
    </Row>
    <Row className="mb-3">
  {show.status === "Privado" ? (
    <Container className="mt-4 place-has">
      <label htmlFor="">El lugar cuenta con:</label>
 
 {words.length > 0 && (
   <Row>
     <Col>
       <div className="d-flex flex-wrap align-items-center">
         {words.map((word, index) => (
           <div key={index} className="d-flex align-items-center mb-2">
             {defaultWords.includes(word) && (
               <input
               type="checkbox"
                 checked={selectedWords.includes(index)}
                 onChange={() => handleCheckboxChange(index)}
                 className="mr-2"
                 />
                 )}
             <span>{word}</span>
             <Button
               variant="danger"
               size="sm"
               onClick={() => handleDeleteWord(index)}
               >
               X
             </Button>
               {index < words.length - 1 && <span className="mx-2">|</span>}
           </div>
         ))}
       </div>
     </Col>
   </Row>
 )}

      <Row>
   <Col>
     {inputVisible ? (
       <div>
         <Form.Group className="mb-3">
           <Form.Control
             type="text"
             placeholder="Nueva Palabra"
             value={word}
             onChange={handleWordChange}
             />
         </Form.Group>
         <Button variant="primary" onClick={handleAddWord}>
           Agregar 
         </Button>{' '}
         <Button variant="secondary" onClick={toggleInput}>
           Cancelar
         </Button>
       </div>
     ) : (
       <Button variant="info" onClick={toggleInput}>
        Agregar más
       </Button>
     )}
   </Col>
 </Row>
</Container>


         ): (
           <div>

          </div>
         )}
</Row>

<Row className="mb-3">
  {show.status === "Privado" ? (
    <Container className="mt-4 place-has">
      <label htmlFor="">Inormación importante:</label>
 
 {words.length > 0 && (
   <Row>
     <Col>
       <div className="d-flex flex-wrap align-items-center">
         {infoImportant.map((word, index) => (
           <div key={index} className="d-flex align-items-center mb-2">
             {defaultWords.includes(word) && (
               <input
               type="checkbox"
                 checked={infoImportant.includes(index)}
                 onChange={() => handleCheckboxChange(index)}
                 className="mr-2"
                 />
                 )}
             <span>{word}</span>
             <Button
               variant="danger"
               size="sm"
               onClick={() => handleDeleteWord(index)}
               >
               X
             </Button>
               {index < words.length - 1 && <span className="mx-2">|</span>}
           </div>
         ))}
       </div>
     </Col>
   </Row>
 )}

      <Row>
   <Col>
     {inputVisible ? (
       <div>
         <Form.Group className="mb-3">
           <Form.Control
             type="text"
             placeholder="Nueva Palabra"
             value={word}
             onChange={handleWordChange}
             />
         </Form.Group>
         <Button variant="primary" onClick={handleAddWord}>
           Agregar 
         </Button>{' '}
         <Button variant="secondary" onClick={toggleInput}>
           Cancelar
         </Button>
       </div>
     ) : (
       <Button variant="info" onClick={toggleInput}>
        Agregar más información
       </Button>
     )}
   </Col>
 </Row>
</Container>


         ): (
           <div>

          </div>
         )}
</Row>


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
                onClick={handleNext}
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
          <div className="responsive-phone-tablet">
            {isLoading ? (
              <div className="loading-overlay">
                <div>
                  <BeatLoader color="#05A1A1" size="80" />
                  <h2>Publicando</h2>
                </div>
              </div>
            ) : (
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
                                <h3 className="text-base text-gray-900">
                                  {show.stay}
                                </h3>
                              )}
                            </div>
                          </div>
                        </p>

                        <div className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserva">
                          Reservar
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 lg:row-span-3 lg:mt-0">
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
                      </div>
                    )}

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
      <Typography sx={{  mt: 5 }}>
        <form action="" method="post" onSubmit={handleSubmit}>
          {renderForm(activeStep)}
        </form>
      </Typography>
    </Box>
  );
}
