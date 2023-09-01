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
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsPostTuristic } from "../../redux/action";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

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
  const { idTuristic } = useParams();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [show, setShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const detailpost = useSelector((state) => state.detailpost);
  const dispatch = useDispatch();
  console.log(detailpost);

  React.useEffect(() => {
    dispatch(DetailsPostTuristic(idTuristic));
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, []);

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

  const handleShowVistPreview = () => {
    setVistPreview(true);
  };
  const Close = () => {
    setVistPreview(false);
  };

  const list = (anchor) => (
    <div>
      <Box sx={{ display: "grids" }}>
        <List className="list-drawer">
          <h3
            className="btn-x"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            &times;
          </h3>
          <div className="drawer-details">
            {detailpost.imageFile.map((img, index) => (
              <div onClick={handleShowVistPreview} className="drawer-image">
                <img src={img} alt="not found" />
              </div>
            ))}
          </div>
        </List>
      </Box>

      {VistPreview && (
      <div class="overlay">

          <span onClick={Close} class="close-button-modal">
            &times;
          </span>
          
          <Carousel fade>
            {detailpost.imageFile.map((img, index) => (
            <Carousel.Item className="img-carrusel">

                  <img src={img} alt="Not found" />
            </Carousel.Item>

            ))}
          </Carousel>
        </div>
      )}
      </div>
  );

  return (
    <div>
      <Header />

      <div className="bg-white">
        <div className="pt-6">
          <h1 className="title">{detailpost.title}</h1>

          {/* Image gallery */}
          {isLoading ? (
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <Skeleton variant="rectangular" id="skeleton1" />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                  <Skeleton variant="rectangular" id="skeleton2" />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Skeleton variant="rectangular" id="skeleton2" />
                </div>
              </div>

              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <Skeleton variant="rectangular" id="skeleton1" />
              </div>
            </div>
          ) : (
            <div>
              {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <div onClick={toggleDrawer(anchor, true)}>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                          src={detailpost.imageFile[0]}
                          alt="Not found"
                          className="h-full w-full object-cover object-center hover-image"
                        />
                      </div>

                      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                          <img
                            src={detailpost.imageFile[1]}
                            alt="Not found"
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                          <img
                            src={detailpost.imageFile[2]}
                            alt="Not found"
                            className="h-full w-full object-cover object-center hover-image"
                          />
                        </div>
                      </div>
                      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                          src={detailpost.imageFile[2]}
                          alt="Not found"
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
            </div>
          )}

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Lugar para quedarse. Anfitrión:{" "}
                {detailpost.Users && detailpost.Users[0].name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {detailpost.price}
                <div>
                  <div className="space-y-6">
                    <h3 className="text-base text-gray-900">
                      {detailpost.stay}
                    </h3>
                  </div>
                </div>
              </p>

              {/* Reviews */}

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserve"
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
                    {detailpost.summary}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {detailpost.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
