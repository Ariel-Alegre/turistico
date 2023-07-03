import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import './LoginForms.scss'

export default function LoginForms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

  };

  const responseGoogle = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
 

      <div className= "login-Redes">
        <h1>Iniciar sesión</h1>
        <p>
          ¿Aún no tiene una cuenta? <a href="/auth/register">Regístrese</a>
        </p>
        <p>Conectarse con las redes sociales</p>
      </div>
      <hr className="hr" />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "450px" },
        }}
        noValidate
        autoComplete="off"
        display="grid"
        justifyContent="center"
        gap="20px"
      >
        <Stack sx={{ width: "100%" }}  spacing={2}>
          <TextField
            id="outlined-basic"
            label="Correo electrónico"
            variant="outlined"
            value={email}
            className="input"
          />
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            className="input"
         
         />
          {error && <Alert severity="error">{error}</Alert>}
        </Stack>
        <Button
          type="submit"
          variant="contained"
          display="flex"
          justifyContent="center"
          sx={{backgroundColor: "#05A1A1", ":hover": {
            backgroundColor: "#05A1A1"
          }}}
        >
          Ingresar
        </Button>
      </Box>
    </div>
  );
}
