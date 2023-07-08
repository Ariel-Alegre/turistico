import { useState, useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { UserLogin } from '../../redux/action'

import './LoginForms.scss';
import { useNavigate } from 'react-router-dom';


export default function LoginForms() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate()
const token = useSelector(state => state.token);
const [isLoading, setIsLoading] = useState(true);


  
  const handleSubmit = async (event) => {
    dispatch(UserLogin(email, password))

    navigate('/')
  

 
    
};

useEffect(() => {
  // Simulación de una tarea asíncrona
  setTimeout(() => {
    setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
  }, 2000); // Esperar 2 segundos antes de cambiar el estado
  
}, [dispatch]);









  return (
    <>
        {isLoading ? (
             <div>
            <h1>LOADING</h1>
             <div ></div>
           </div>
      ) : (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">

          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            />
            </a>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciar sesión en su cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                Correo eléctronico
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600  text-color ">
                   Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6 input-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md button-login px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
                Iniciar se sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            no tiene cuenta?{' '}
            <a href="/auth/register" className="font-semibold leading-6 text-indigo-600 text-color"  >
              Registrarse
            </a>
          </p>
        </div>
      </div>
      )}
    </>
  )
}
