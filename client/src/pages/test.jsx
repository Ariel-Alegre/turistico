import "./test.scss";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import america from "../assets/icons/icons-america.png";
import europa from "../assets/icons/icons-europa.png";
import asia from "../assets/icons/icons-asia.png";
import africa from "../assets/icons/icons-africa.png";
import oceania from "../assets/icons/icons-oceania.png";

import { useState, useEffect, useRef } from "react";
import CountryAmerica from "../components/Country/CountryAmerica";
import CountryEuropa from "../components/Country/CountryEuropa";
import CountryAsia from "../components/Country/CountryAsia";
import CountryAfrica from "../components/Country/CountryAfrica";
import CountryOceania from "../components/Country/CountryOceania";


function Continent() {


  const [anchorAmerica, setAnchorAmerica] = React.useState(null);
  const open = Boolean(anchorAmerica);
  const handleClick = (event) => {
    setAnchorAmerica(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorAmerica(null);
  };

  const [anchorEurope, setAnchorEurope] = React.useState(null);
  const openEurope = Boolean(anchorEurope);
  const handleClickEurope = (event) => {
    setAnchorEurope(event.currentTarget);
  };
  const handleCloseEurope = () => {
    setAnchorEurope(null);
  };
  const [anchorAsia, setAnchorAsia] = React.useState(null);
  const openAsia = Boolean(anchorAsia);
  const handleClickAsia = (event) => {
    setAnchorAsia(event.currentTarget);
  };
  const handleCloseAsia = () => {
    setAnchorAsia(null);
  };
  const [anchorAfrica, setAnchorAfrica] = React.useState(null);
  const openAfrica = Boolean(anchorAfrica);
  const handleClickAfrica = (event) => {
    setAnchorAfrica(event.currentTarget);
  };
  const handleCloseAfrica = () => {
    setAnchorAfrica(null);
  };

  const [anchorOceania, setAnchorOceania] = React.useState(null);
  const openOceania = Boolean(anchorOceania);
  const handleClickOceania = (event) => {
    setAnchorOceania(event.currentTarget);
  };
  const handleCloseOceania = () => {
    setAnchorOceania(null);
  };








  return (
    <>
      <div className="continent-container">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <div className="continent">

              <img src={america} alt="not found" />
             <p>

              America
             </p>
            </div>
      </Button>
      <div>

      <Menu
        id="basic-menu"
        anchorEl={anchorAmerica}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
     
        >
        <CountryAmerica/> 
      </Menu>
        </div>
        <Button
        id="basic-button"
        aria-controls={openEurope ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openEurope ? 'true' : undefined}
        onClick={handleClickEurope}
      >
               <div className="continent">
              <img src={europa} alt="not found" />
            <p>

              Europa
            </p>
            </div>
      </Button>
      <div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEurope}
        open={openEurope}
        onClose={handleCloseEurope}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
     
        >
               <CountryEuropa />

      </Menu>
        </div>

        <Button
        id="basic-button"
        aria-controls={openAsia ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openAsia ? 'true' : undefined}
        onClick={handleClickAsia}
      >
               <div className="continent">
              <img src={europa} alt="not found" />
            <p>

              Asia
            </p>
            </div>
      </Button>
      <div>

      <Menu
        id="basic-menu"
        anchorEl={anchorAsia}
        open={openAsia}
        onClose={handleCloseAsia}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
     
        >
            <CountryAsia  />

      </Menu>
        </div>

        <Button
        id="basic-button"
        aria-controls={openAfrica ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openAfrica ? 'true' : undefined}
        onClick={handleClickAfrica}
      >
             <div className="continent">
              <img src={africa} alt="not found" />
            <p>

              Africa
            </p>

            </div>
      </Button>
      <div>

      <Menu
        id="basic-menu"
        anchorEl={anchorAfrica}
        open={openAfrica}
        onClose={handleCloseAfrica}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
     
        >
                   <CountryAfrica/>


      </Menu>
        </div>

        <Button
        id="basic-button"
        aria-controls={openOceania ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openOceania ? 'true' : undefined}
        onClick={handleClickOceania}
      >
          <div className="continent">

<img src={oceania} alt="not found" />
<p>

Oceania
</p>

</div>
      </Button>
      <div>

      <Menu
        id="basic-menu"
        anchorEl={anchorOceania}
        open={openOceania}
        onClose={handleCloseOceania}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
     
        >
                   <CountryOceania/>


      </Menu>
        </div>

       
          <button variant="contained" >
      
          </button>
          <button variant="contained">
        
          </button>
      </div>
{/*       <div  ref={componentRef}>

   
  
    
       
   
     
  

        
   




    
        </div> */}
      </>
  );
}

export default Continent;
