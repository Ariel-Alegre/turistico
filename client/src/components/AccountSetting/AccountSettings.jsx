import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  './AccountSettings.scss';
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div>
      <div className="text-account">
        <h1>Cuenta</h1>
        <div className="sub-text">

        <p>Ariel alegre </p>,
        <span>arielalegre98@gmail.com</span>
        </div>
        
      </div>
    <div className="card-container">
      <Link to='/account-settings/personal-info'>


      <Card sx={{ minWidth: 275, height: 200}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            icono de documento
          </Typography>
          <Typography variant="h5" component="div">
         Informacion personal
          </Typography>
          <Typography sx={{ mb: 1.5, width: '300px' }} color="text.secondary">
            Proporcioná tus datos personales e indicanos cómo podemos ponernos en contacto con vos.
          </Typography>
    
        </CardContent>
    
      </Card>
      </Link>
      <Link to='/account-settings/login-and-security'>
      <Card sx={{ minWidth: 275, height: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            icono de seguridad
          </Typography>
          <Typography variant="h5" component="div">
        Inicio de sesión y seguridad
          </Typography>
          <Typography sx={{ mb: 1.5, width: '300px' }} color="text.secondary">
         Actualizá tu contraseña y protegé tu cuenta
          </Typography>
    
        </CardContent>
    
      </Card>
      </Link>
      <Card sx={{ minWidth: 275, height: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            icono de documento
          </Typography>
          <Typography variant="h5" component="div">
         Informacion personal
          </Typography>
          <Typography sx={{ mb: 1.5, width: '300px' }} color="text.secondary">
            Proporcioná tus datos personales e indicanos cómo podemos ponernos en contacto con vos.
          </Typography>
    
        </CardContent>
    
      </Card>
    </div>
    </div>
  );
}
