import React from "react";
import "./Cards.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

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

          {/* <div className="card-rating">
            <StarRateRoundedIcon />
            <p>{card.rating}</p>
          </div> */}
        </div>
        <Link to='/rooms' className="text-link">

        {/* <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p> */}
        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
          <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
        </p>
        </Link>

      </div>
  );
}

export default Card;