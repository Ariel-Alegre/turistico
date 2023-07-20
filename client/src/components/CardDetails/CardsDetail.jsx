import * as React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import "./CardsDetail.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "react-bootstrap/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "../Header";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

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

export default function CardDetails() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [VistPreview, setVistPreview] = React.useState(false);
  const handleShowVistPreview = (e) => {
    e.preventDefault()
    setVistPreview(true)

  }
  const list = (anchor) => (
    <div>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        >
        <List className="list-drawer">
          <ListItemText
            className="btn-x"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            >
            X
          </ListItemText>
          <div className="drawer-details img-container">
            {product.images.map((img, index) => (
              <div className="aspect-h-4 aspect-w-3  overflow-hidden rounded-lg lg:block">
                <button variant="primary" onClick={handleShowVistPreview} id={index} >
                  <img src={img.src} alt="not found" className="hover-image" />
                </button>
               

                { VistPreview ? (
                  <div className="vist-preview">
               
                  <img src={img.src} alt="Not found" />
               </div>
                  ): <div></div>
                }
                </div>
          ))}
          </div>
          <Divider />
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      <Header />

      <div className="bg-white">
        <div className="pt-6">
          <h1 className="title">Skylodge Adventure Suites</h1>

          {/* Image gallery */}
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <div onClick={toggleDrawer(anchor, true)}>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                  <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      className="h-full w-full object-cover object-center hover-image"
                    />
                  </div>

                  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                      <img
                        src={product.images[1].src}
                        alt={product.images[1].alt}
                        className="h-full w-full object-cover object-center hover-image"
                      />
                    </div>
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                      <img
                        src={product.images[2].src}
                        alt={product.images[2].alt}
                        className="h-full w-full object-cover object-center hover-image"
                      />
                    </div>
                  </div>
                  <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img
                      src={product.images[3].src}
                      alt={product.images[3].alt}
                      className="h-full w-full object-cover object-center hover-image"
                    />
                  </div>
                </div>
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Lugar para quedarse. Anfitrión: Natalia
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
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    ¿Alguna vez quisiste dormir en el nido de un cóndor? ¡Esto
                    es lo mejor! Una cápsula de lujo transparente que cuelga de
                    la cima de una montaña en el Valle Sagrado del Perú. Tenemos
                    3 cápsulas, capacidad máxima en el albergue 12 personas por
                    noche. El alojamiento ¿Alguna vez quisiste dormir en el nido
                    de un cóndor? ¡Esto es lo mejor! Una cápsula de lujo
                    transparente que cuelga de la cima de una montaña en el
                    Valle Sagrado del Perú. Ubicadas en el Valle Sagrado de
                    Cuzco, Perú, las exclusivas Skylodge Adventure Suites le
                    ofrecen la oportunidad de dormir dentro de un dormitorio
                    colgante completamente transparente, que le permite apreciar
                    la impresionante vista de este mágico y místico valle. Para
                    dormir en Skylodge, la gente debe subir 400 metros de Via
                    Ferrata o caminar un sendero intrépido a través de
                    tirolinas. Una noche en este lugar hará realidad tus sueños.
                    Los paquetes incluyen desayuno y cena gourmet con vino,
                    transporte desde Cuzco y nuestros guías bilingües
                    profesionales. Cuota de US$ 450 por persona - 2017 Acceso de
                    los huéspedes Equipamiento, snack, cena gourmet y desayuno
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    ¿Alguna vez quisiste dormir en el nido de un cóndor? ¡Esto
                    es lo mejor! Una cápsula de lujo transparente que cuelga de
                    la cima de una montaña en el Valle Sagrado del Perú. Tenemos
                    3 cápsulas, capacidad máxima en el albergue 12 personas por
                    noche. El alojamiento ¿Alguna vez quisiste dormir en el nido
                    de un cóndor? ¡Esto es lo mejor! Una cápsula de lujo
                    transparente que cuelga de la cima de una montaña en el
                    Valle Sagrado del Perú. Ubicadas en el Valle Sagrado de
                    Cuzco, Perú, las exclusivas Skylodge Adventure Suites le
                    ofrecen la oportunidad de dormir dentro de un dormitorio
                    colgante completamente transparente, que le permite apreciar
                    la impresionante vista de este mágico y místico valle. Para
                    dormir en Skylodge, la gente debe subir 400 metros de Via
                    Ferrata o caminar un sendero intrépido a través de
                    tirolinas. Una noche en este lugar hará realidad tus sueños.
                    Los paquetes incluyen desayuno y cena gourmet con vino,
                    transporte desde Cuzco y nuestros guías bilingües
                    profesionales. Cuota de US$ 450 por persona - 2017 Acceso de
                    los huéspedes Equipamiento, snack, cena gourmet y desayuno
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
