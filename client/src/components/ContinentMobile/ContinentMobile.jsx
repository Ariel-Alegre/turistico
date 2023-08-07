import "./ContinentMobile.scss";
import Button from "@mui/material/Button";
import america from "../../assets/icons/icons-america.png";
import europa from "../../assets/icons/icons-europa.png";
import asia from "../../assets/icons/icons-asia.png";
import africa from "../../assets/icons/icons-africa.png";
import oceania from "../../assets/icons/icons-oceania.png";
import { useState } from "react";
import CountryAmerica from "../Country/CountryAmerica";
import CountryEuropa from "../Country/CountryEuropa";
import CountryAsia from "../Country/CountryAsia";
import CountryAfrica from "../Country/CountryAfrica";
import CountryOceania from "../Country/CountryOceania";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


function ContinentMobile() {
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
    <div>
  
      <div className="continentMobile-container">
        <div>
          <Button variant="contained" onClick={handleClickAmerica}>
            <div>
              <p>

              America
              </p>
              <img src={america} alt="not found" />
            </div>
          </Button>
        </div>

        <div>
          <Button variant="contained" onClick={handleClickEurope}>
            <div>
              <p>

              Europa
              </p>
              <img src={europa} alt="not found" />
            </div>
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={handleClickAsia}>
            <div>
              <p>

              Asia
              </p>
              <img src={asia} alt="not found" />
            </div>
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={handleClickAfrica}>
            <div>
              <p>

              Africa
              </p>
              <img src={africa} alt="not found" />
            </div>
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={handleClickOceania}>
            <div>
              <p>

              Oceania
              </p>
              <img src={oceania} alt="not found" />
            </div>
          </Button>
        </div>
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
    </div>
  );
}

export default ContinentMobile;
