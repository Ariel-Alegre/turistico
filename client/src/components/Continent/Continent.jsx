import "./Continent.scss";
import Button from "@mui/material/Button";
import america from "../../assets/icons/icons-america.png";
import europa from "../../assets/icons/icons-europa.png";
import asia from "../../assets/icons/icons-asia.png";
import africa from "../../assets/icons/icons-africa.png";
import oceania from "../../assets/icons/icons-oceania.png";

import { useState, useEffect, useRef } from "react";
import CountryAmerica from "../Country/CountryAmerica";
import CountryEuropa from "../Country/CountryEuropa";
import CountryAsia from "../Country/CountryAsia";
import CountryAfrica from "../Country/CountryAfrica";
import CountryOceania from "../Country/CountryOceania";


function Continent() {
  const [showAmerica, setShowAmerica] = useState(false);
  const [showEurope, setShowEurope] = useState(false);
  const [showAsia, setShowAsia] = useState(false);
  const [showAfrica, setShowAfrica] = useState(false);
  const [showOceania, setShowOceania] = useState(false);

  const handleClickAmerica = (e) => {
    e.preventDefault();
    setShowAfrica(false);
    setShowAsia(false);
    setShowOceania(false);
    setShowEurope(false);
    setShowAmerica(true);

  };

  const handleClickEurope = (e) => {
    e.preventDefault();
    setShowAmerica(false);
    setShowAsia(false);
    setShowOceania(false);
    setShowAfrica(false);

    setShowEurope(true);
  };

  const handleClickAsia = (e) => {
    e.preventDefault();
    setShowAfrica(false);
    setShowOceania(false);
    setShowAmerica(false);
    setShowEurope(false);
    setShowAsia(true);
  };
  const handleClickAfrica = (e) => {
    e.preventDefault();
    setShowAmerica(false);
    setShowEurope(false);
    setShowAsia(false);
    setShowOceania(false);
    setShowAfrica(true);
  };

  const handleClickOceania = (e) => {
    e.preventDefault();
    setShowAmerica(false);
    setShowEurope(false);
    setShowAsia(false);
    setShowAfrica(false);
    setShowOceania(true);
  };

  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setShowAmerica(false);
        setShowEurope(false);
        setShowAsia(false);
        setShowAfrica(false);
        setShowOceania(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 

  return (
    <>
       
      <div className="continent-container">
          <button variant="contained" onClick={handleClickAmerica}>
            <div className="continent">

              <img src={america} alt="not found" />
             <p>

              America
             </p>
            </div>
          </button>

          <button variant="contained" onClick={handleClickEurope}>
            <div className="continent">
              <img src={europa} alt="not found" />
            <p>

              Europa
            </p>
            </div>
          </button>
          <button variant="contained" onClick={handleClickAsia}>
            <div className="continent">
              <img src={asia} alt="not found" />
            <p>

              Asia
            </p>

            </div>
          </button>
          <button variant="contained" onClick={handleClickAfrica}>
            <div className="continent">
              <img src={africa} alt="not found" />
            <p>

              Africa
            </p>

            </div>
          </button>
          <button variant="contained" onClick={handleClickOceania}>
            <div className="continent">

              <img src={africa} alt="not found" />
             <p>

              Oceania
             </p>

            </div>
          </button>
      </div>
      <div  ref={componentRef}>

      {showAmerica ? (

        <CountryAmerica
          showAmerica={showAmerica}
          setShowAmerica={setShowAmerica}
          />
        ) : (
        <div></div>
        )}
      {showEurope ? (
        <CountryEuropa showEurope={showEurope} setShowEurope={setShowEurope} />
        ) : (
        <div></div>
      )}
      {showAsia ? (
        <CountryAsia showAsia={showAsia} setShowAsia={setShowAsia} />
      ) : (
        <div></div>
        )}
      {showAfrica ? (
        <CountryAfrica showAfrica={showAfrica} setShowAfrica={setShowAfrica} />
      ) : (
        <div></div>
        )}
      {showOceania ? (
        <CountryOceania
        showOceania={showOceania}
        setShowOceania={setShowOceania}
        />
        ) : (
        <div></div>
      )}

    
        </div>
      </>
  );
}

export default Continent;
