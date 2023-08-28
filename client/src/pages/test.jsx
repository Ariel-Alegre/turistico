import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import lagos from './../assets/icons-filter/lagos.png';

const Carrusel = () => {
  return (
    <Splide
      options={{
        type: 'slide', // Tipo de transición (slide)
        perPage: 2,    // Número de elementos a mostrar en un slide
        perMove: 1,    // Número de elementos a mover en cada transición
      }}
    >
      <SplideSlide>
      <button variant="contained">
          <div className="filter">

            <img src={lagos} alt="not found" />
           <p>

            Lagos
           </p>
          </div>
        </button>
      </SplideSlide>
      <SplideSlide>
      <button variant="contained">
          <div className="filter">

            <img src={lagos} alt="not found" />
           <p>

            Lagos
           </p>
          </div>
        </button>
      </SplideSlide>
      <SplideSlide>
      <button variant="contained">
          <div className="filter">

            <img src={lagos} alt="not found" />
           <p>

            Lagos
           </p>
          </div>
        </button>
      </SplideSlide>
      <SplideSlide>
      <button variant="contained">
          <div className="filter">

            <img src={lagos} alt="not found" />
           <p>

            Lagos
           </p>
          </div>
        </button>
      </SplideSlide>
      {/* Agrega más slides según sea necesario */}
    </Splide>
  );
};

export default Carrusel;
