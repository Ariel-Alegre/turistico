import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../../redux/action";
import "./LoginForms.scss";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import { Button } from "react-bootstrap";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa"; // Importa los iconos de Facebook y Google
import {  Modal } from 'antd';
import BeatLoader from "react-loading";

import RegisterForm from "../RegisterForm/RegisterForm";

export default function LoginForms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const loginError = useSelector((state) => state.loginError);
  const [fullscreen, setFullscreen] =React.useState(true);

  const [isModalOpenRegister, setIsModalOpenRegister] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const showModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const handleOkRegister = () => {
    setIsModalOpenRegister(false);
  };

  const handleCancelRegister = () => {
    setIsModalOpenRegister(false);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(UserLogin(email, password));
  };

  const handleFacebookLogin = () => {
    // Implementa tu lógica de inicio de sesión con Facebook aquí
    console.log("Inicio de sesión con Facebook");
  };

  const handleGoogleLogin = () => {
    // Implementa tu lógica de inicio de sesión con Google aquí
    console.log("Inicio de sesión con Google");
  };
 
  useEffect(() => {
  
    if (token) {
      navigate("/");
    } else if (loginError) {
      alert(
        "El correo y la contraseña no coinciden, por favor inténtelo de nuevo."
      );
    }
  }, [token, loginError, navigate]);

  return (
    <>
   

    <div className="login-container">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión en su cuenta
          </h2>
        </div>
    
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
            >
                <div>
              <Button
                variant="primary"
                onClick={handleFacebookLogin}
                className="flex w-full justify-center rounded-md button-login px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <FaFacebookSquare className="mr-2" /> Iniciar sesión con Facebook
              </Button>
            </div>
                  <div>
              <Button
                variant="danger"
                onClick={handleGoogleLogin}
                className="flex w-full justify-center rounded-md button-login px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <FaGoogle className="mr-2" /> Iniciar sesión con Google
              </Button>
            </div>
            <div className="horizontal-line-with-o">
        <div className="line"></div> {/* Línea a la izquierda */}
        <div className="letter">O</div> {/* Letra "O" en el medio */}
        <div className="line"></div> {/* Línea a la derecha */}
      </div>
           
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
                >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                  >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 text-color"
                    >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6 input-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
            </div>
            <div>
              <Button
                style={{ backgroundColor: "#05A1A1", borderColor:"#05A1A1",}}

                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </Button>
            </div>

        
      
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tiene cuenta?{" "}
            <a
              className="font-semibold leading-6 text-indigo-600 text-color"
              onClick={showModalRegister}
              >
              Registrarse
            </a>
          </p>
        </div>
      </div>
    </div>
    <Modal
        visible={isModalOpenRegister}
        onOk={handleOkRegister}
        onCancel={handleCancelRegister}
        footer={null} // Esto quita los botones "Ok" y "Cancel"
      >
        <RegisterForm />
      </Modal>

              </>
  );
}
