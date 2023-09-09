import React, { useState, useEffect } from "react";
import "./Cards.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { AllPostTuristic, dataPersonal } from "../../redux/action";

function Card() {
  const { idTuristic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.allPost);
  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);

  console.log(datapersonal);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const storedBackgroundColor = localStorage.getItem("avatarBackgroundColor");
  const [avatarBackgroundColor, setAvatarBackgroundColor] = React.useState(
    storedBackgroundColor || getRandomColor()
  );

  useEffect(() => {
    dispatch(AllPostTuristic());
    dispatch(dataPersonal(token));
    if (!storedBackgroundColor) {
      const newColor = getRandomColor();
      setAvatarBackgroundColor(newColor);
      localStorage.setItem("avatarBackgroundColor", newColor);
    }
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, [dispatch, storedBackgroundColor, token]);

  return (
    <div className="card-container">
      {isLoading ? (
        <Grid className="loading-skeleton">
          {Array.from(new Array(allPost.length)).map((item, index) => (
            <Box key={index}>
              <Skeleton variant="rectangular" id="skeleton" />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="50%" />
                <Skeleton width="30%" />
              </Box>
            </Box>
          ))}
        </Grid>
      ) : (
        <div className="cards-flex">
          {allPost.map((data, i) =>
            data.Posts.map((info, index) => (
              <div className="card-box" key={index}>
                <Carousel interval={null} className="swiper-container">
                  {info.imageFile.map((imageSrc, imageIndex) => (
                    <Carousel.Item key={imageIndex}>
                      <Link to={"/rooms/" + info.id} className="text-link">
                        <img
                          src={imageSrc}
                          alt={imageSrc}
                          className="card-img"
                        />
                      </Link>
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="desc-hover">

                <div className="card-info-flex">
                  <Link to="/rooms" className="text-link">
                    <h3 className="card-title">{info.title}</h3>
                  </Link>
                  <div>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                      }}
                    >
                      {data.name && data.name[0].toUpperCase()}
                    </Avatar>
                  </div>
                </div>
                <Link to="/rooms" className="text-link">
     
                  {info.status === "Público" ? (
                    <div>

                          <p className="summary-card">
                          {info.summary}
                          <p
                            style={{
                              margin: "0.2rem",
                              fontSize: "1rem",
                              color: "var(--black)",
                            }}
                            >
                            <span style={{ fontWeight: "600" }}>Gratis</span>{" "}
                       
                          </p>
                        </p>

                    <p
                    className="stay-price"
                    style={{
                      margin: "0.2rem",
                      fontSize: "1rem",
                      color: "var(--black)",
                    }}
                    >
                    <span style={{ fontWeight: "600" }}>Gratis</span>{" "}
                  </p>
                      </div>
                    )
                    : (
                      <div>

                      <p className="summary-card">
                      {info.summary}
                      <p
                        style={{
                          margin: "0.2rem",
                          fontSize: "1rem",
                          color: "var(--black)",
                        }}
                        >
                        <span style={{ fontWeight: "600" }}>${info.price}</span>{" "}
                        {info.stay}
                      </p>
                    </p>
                      <p
                      className="stay-price"
                      style={{
                        margin: "0.2rem",
                        fontSize: "1rem",
                        color: "var(--black)",
                      }}
                      >
                      <span style={{ fontWeight: "600" }}>${info.price}</span>{" "}
                      {info.stay}
                  </p>
                  </div>
                  )
                  }
                </Link>
              </div>
              </div>
            ))
          )}
        </div>
      )}

    </div>
  );
}

export default Card;
