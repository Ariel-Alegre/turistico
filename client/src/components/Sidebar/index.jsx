import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo from "../../assets/logo/Logo.jpg";
import { StarIcon } from "@heroicons/react/20/solid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://a0.muscache.com/im/pictures/1ef9b49c-6f99-4018-95f9-8471a9fbbd15.jpg?im_w=1200",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://a0.muscache.com/im/pictures/d3041174-4fd1-4199-a8ac-a44907d07bcc.jpg?im_w=720",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://a0.muscache.com/im/pictures/6f8e927e-c0d1-4952-ae0d-705ae391ff8a.jpg?im_w=720",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://a0.muscache.com/im/pictures/880cf735-ac0b-4ad8-93d4-c748564ec103.jpg?im_w=1200",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SideBar() {
  const [show, setShow] = useState({
    anfitrion: "",
    tittle: "",
    images: [],
    summary: "",
    description: ""
  });


  const handleAnfitrion = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      anfitrion: e.target.value,
    }));
  };

  const handleTittle = (e) => {
    e.preventDefault();
    setShow((prevState) => ({
      ...prevState,
      tittle: e.target.value,
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
  const handleImage = (e) => {
    const filesArray = Array.from(e.target.files);
    setShow((prevState) => ({
      ...prevState,
      images: Array.isArray(prevState.images) ? [...prevState.images, ...filesArray] : filesArray, // Agregamos las nuevas imágenes al array existente
    }));
  };
  const handleUpload = () => {
    // Aquí puedes implementar la lógica para subir los archivos al servidor.
    // Puedes usar la variable "selectedFiles" para acceder a los archivos seleccionados.
    // Por ejemplo, podrías utilizar una librería como axios para enviar los archivos al backend.
    console.log(show.images);
  };
  const handleRemove = (index) => {
    const newFilesArray = [...show.images];
    newFilesArray.splice(index, 1);
    setShow((prevState) => ({
      ...prevState,
      images: newFilesArray,
    }));
  };

  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-logo-container">
            <img src={Logo} alt="logo" />
          </div>

          <div className="sidebar-container">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
         
              <TextField
                id="outlined-basic"
                label="Titulo"
                variant="outlined"
                onChange={handleTittle}
                value={show.tittle}
                name="tittle"
              />
              <div>
                <input
                  id="outlined-basic"
                  label="imagenes"
                  variant="outlined"
                  onChange={handleImage}
                  type="file"
                  name="images"
                  multiple
                />

                {show.images && show.images.map((photo) => <img src={photo} alt="" />)}
                <div className="prev-mini">
                  {show.images && show.images.map((file, index) => (
                    <div key={index}>
                      {file && (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index}`}
                          className="img-mini"
                        />
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
              <TextField
                id="outlined-basic"
                label="Anfitrión"
                variant="outlined"
                onChange={handleAnfitrion}
                value={show.anfitrion}
                name="anfitrion"
              />
              <TextField
                id="outlined-basic"
                label="Resumen"
                variant="outlined"
                onChange={handleSummary}
                value={show.summary}
                name="summary"
              />
              <TextField
                id="outlined-basic"
                label="Descripción"
                variant="outlined"
                onChange={handleDescription}
                value={show.description}
                name="description"
              />
            </Box>
          </div>
        </div>
      </nav>
      <div>
        <div className="bg-white">
          <div className="pt-6">
            {show.tittle ? (
              <h1 className="title">{show.tittle}</h1>
            ) : (
              <h1 className="title">Titulo</h1>
            )}

            {/* Image gallery */}
            {["top"].map((anchor) => (
              <React.Fragment key={anchor}>
                <div>
                  <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    {show.images && show.images.length > 0  ? (
                      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                          src={URL.createObjectURL(show.images[0])}
                          alt={show.error}
                          className="h-full w-full object-cover object-center hover-image"
                        />
                      </div>
                    ) : (
                      <div>+</div>
                    )}

                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                      {show.images && show.images.length > 1  ? (
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                          <img
                            src={URL.createObjectURL(show.images[1])}
                            alt={product.images[1].alt}
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                      ) : (
                        <div>+</div>
                      )}

                      {show.images && show.images.length > 2 ? (
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                          <img
                            src={URL.createObjectURL(show.images[2])}
                            alt={product.images[2].alt}
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                      ) : (
                        <div>+</div>
                      )}
                    </div>
                    {show.images && show.images.length > 3  ? (
                      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                          src={URL.createObjectURL(show.images[3])}
                          alt={product.images[3].alt}
                          className="h-full w-full object-cover object-center hover-image"
                        />
                      </div>
                    ) : (
                      <div>+</div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Lugar para quedarse. Anfitrión: {show.anfitrion}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Colors */}

                  {/* Sizes */}

                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Reservar
                  </button>
                </form>
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

               {/*  <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Descripción</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">
                    {show.description && show.description}

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
