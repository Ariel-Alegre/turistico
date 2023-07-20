import "./Continent.scss";
import Button from "@mui/material/Button";
import america from "../../assets/icons/icons-america.png";
import europa from "../../assets/icons/icons-europa.png";
import asia from "../../assets/icons/icons-asia.png";
import africa from "../../assets/icons/icons-africa.png";
import { useState } from "react";
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

  return (
    <>
      <div className="continent-container">
          <Button variant="contained" onClick={handleClickAmerica}>
            <div>
              America
              <img src={america} alt="not found" />
            </div>
          </Button>

          <Button variant="contained" onClick={handleClickEurope}>
            <div>
              Europa
              <img src={europa} alt="not found" />
            </div>
          </Button>
          <Button variant="contained" onClick={handleClickAsia}>
            <div>
              Asia
              <img src={asia} alt="not found" />
            </div>
          </Button>
          <Button variant="contained" onClick={handleClickAfrica}>
            <div>
              Africa
              <img src={africa} alt="not found" />
            </div>
          </Button>
          <Button variant="contained" onClick={handleClickOceania}>
            <div>
              Oceania
              <img src={africa} alt="not found" />
            </div>
          </Button>
      </div>
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
    </>
  );
}

export default Continent;
