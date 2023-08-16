import React, { useState, useEffect } from "react";
import "./Cards.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

function Card({ card }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, []);

  return (
    <div >
      {isLoading ? (
        <div>
          <Grid>
            {(isLoading ? Array.from(new Array(5)) : card).map(
              (item, index) => (
                <Box key={index} className="loading-skeleton">
                  <Skeleton
                    variant="rectangular"
                     id= "skeleton"
                  />

                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton width="50%" />
                    <Skeleton width="30%" />
                  </Box>
                </Box>
              )
            )}
          </Grid>
        </div>
      ) : (
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
            <div >

              <Avatar sx={{ width: 30, height: 30, right: 10, top: 5 }}>{/* {user.name && user.name[0].toUpperCase()} */}</Avatar>
            </div>

          </div>
          <Link to='/rooms' className="text-link">

            <p className='summary-card' >¿Alguna vez quisiste dormir en el nido de un cóndor? ¡Esto es lo mejor! Una cápsula de lujo transparente que cuelga de la cima de una montaña en el Valle Sagrado del Perú.

              <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
                <span style={{ fontWeight: "600", }}>${card.price}</span> night
              </p>
            </p>
            <p className="stay-price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
              <span style={{ fontWeight: "600", }}>${card.price}</span> night
            </p>
          </Link>

        </div>

      )}
    </div>
  );
}

export default Card;
