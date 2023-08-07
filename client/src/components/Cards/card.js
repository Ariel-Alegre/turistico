import React from "react";
import "./Cards.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Avatar from "@mui/material/Avatar";
import {  useSelector } from 'react-redux';

function Card({ card }) {
  return (
    <div className="card-box">
         <Carousel interval={null} className="swiper-container" >
          {card.imgSrc.map((src, i) => (
            <Carousel.Item key={i}>
              <Link to='/rooms' className="text-link">
              <img src={src} className="card-img" />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="card-info-flex">
            <Link to='/rooms' className="text-link">

          <h3 className="card-title">{card.title}</h3>
          </Link>
          <div c>

          <Avatar  sx={{ width: 30, height: 30, right: 10, top: 5}}>{/* {user.name && user.name[0].toUpperCase()} */}</Avatar>
          </div>

          {/* <div className="card-rating">
            <StarRateRoundedIcon />
            <p>{card.rating}</p>
          </div> */}
        </div>
        <Link to='/rooms' className="text-link">

       {/*   <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p> */}
        <p  className= 'summary-card' >¿Alguna vez quisiste dormir en el nido de un cóndor? ¡Esto es lo mejor! Una cápsula de lujo transparente que cuelga de la cima de una montaña en el Valle Sagrado del Perú.</p> 
        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
          <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
        </p>
        </Link>

      </div>
  );
}

export default Card;