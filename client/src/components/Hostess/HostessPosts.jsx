import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { HostesstUser } from "../../redux/action";
import "./HostessPosts.scss";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
function HostessAdmin() {
  const { idHostess } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const hostessuser = useSelector((state) => state.hostessuser);

  console.log(hostessuser.phone);

  React.useEffect(() => {
    dispatch(HostesstUser(idHostess));
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, []);

  return (
    <>
     {/*  {hostessuser.id  ? (
        <div className="cards-flex">
          {hostessuser.Posts &&
            hostessuser.Posts.map((data, dataIndex) => (
              <div key={dataIndex}>
                <Carousel interval={null} className="swiper-container">
                  {data.imageFile.map((imageSrc, imageIndex) => (
                    <Carousel.Item key={imageIndex} className="text-link ">
                      <img src={imageSrc} alt={imageSrc} className="card-img" />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="card-info-flex">
                  <h3 className="card-title">{data.title}</h3>
                  <div>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                      }}
                    >
                      {hostessuser.name && hostessuser.name[0].toUpperCase()}
                    </Avatar>
                  </div>
                </div>
                <p>
                  <p
                    style={{
                      margin: "0.2rem",
                      fontSize: "1rem",
                      color: "var(--black)",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>{data.summary}</span>{" "}
                  </p>
                </p>
                {data.price ? (
                  <p
                    className="stay-price"
                    style={{
                      margin: "0.2rem",
                      fontSize: "1rem",
                      color: "var(--black)",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>${data.price}</span>{" "}
                    {data.stay}
                  </p>
                ) : (
                  <p
                    className="stay-price"
                    style={{
                      margin: "0.2rem",
                      fontSize: "1rem",
                      color: "var(--black)",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Gratis</span>{" "}
                    {data.stay}
                  </p>
                )}
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h1>Sección donde va a poder editar o eliminar publicación</h1>
        </div>
      )} */}
    </>
  );
}

export default HostessAdmin;
