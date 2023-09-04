import lagos from "../../assets/icons-filter/lagos.png";
import montañas from "../../assets/icons-filter/montañas.png";
import areas_verdes from "../../assets/icons-filter/areas-verdes.png";
import parques_acuaticos from "../../assets/icons-filter/parques-acuaticos.jpg";
import playas from "../../assets/icons-filter/playas.png";
import Parques_arqueologicos from "../../assets/icons-filter/parques-arqueologicos.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import React, { useEffect } from "react";

import "./FilterCard.scss";

export default function FilterCard() {
  return (
    <div className="filter-container">
      <Splide
        options={{
          type: "slide", // Tipo de transición (slide)
          perPage: 1, // Número de elementos a mostrar en un slide
          perMove: 1, // Número de elementos a mover en cada transición
        }}
        className="slide"
      >
        <SplideSlide className="slide-card">
          <button variant="contained" className="filter-type no-spacing">
            <img src={lagos} alt="not found" />
            <p>Lagos</p>
          </button>
          <button variant="contained" className="filter-type no-spacing">
            <img src={montañas} alt="not found" />
            <p>Montañas</p>
          </button>
        </SplideSlide>
        <SplideSlide className="slide-card">
          <button variant="contained" className="filter-type no-spacing">
            <img src={areas_verdes} alt="not found" />
            <p>Areas verdes</p>
          </button>
          <button variant="contained" className="filter-type">
            <img src={parques_acuaticos} alt="not found" />
            <p>Parques acuaticos</p>
          </button>
        </SplideSlide>
    

        <SplideSlide className="slide-card">
          <button variant="contained" className="filter-type">
            <img src={playas} alt="not found" />
            <p>Playas</p>
          </button>
          <button variant="contained" className="filter-type">
            <img src={Parques_arqueologicos} alt="not found" />
            <p>Parques arqueologicos</p>
          </button>
        </SplideSlide>
  
      </Splide>
    </div>
  );
}
