import LoginForms from "../components/LoginForms/LoginForms";
import { useState, useEffect } from "react";
import BeatLoader from 'react-loading';
import '../Loading.scss'
export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
    }, 1000);
  }, []);



  return (
    <>
      {isLoading ? (
        <div className="loading-container">

       <BeatLoader  color="#05A1A1"  size= '80' />
        </div>
      ) : (
        <div>
          <LoginForms />
        </div>
      )}
    </>
  );
}

