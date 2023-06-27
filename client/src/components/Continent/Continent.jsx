import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Continent.scss';
import { BiWorld } from 'react-icons/bi';
import CountriesAmerica from '../CountriesAmerica/CountriesAmerica';
import CountriesEurope from '../CountriesEurope/CountriesEurope';


export default function Continent() {
  const [showAmerica, setShowAmerica] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    setShowAmerica(true)
  }
  
  return (
    <ButtonGroup className='continent-container' >
      <Button onClick={handleClick}>America <BiWorld className='icons'/> </Button>
      {showAmerica && (
        <CountriesEurope/>
      )}
      <Button>Europa</Button>
      <Button>Asia</Button>
      <Button>Africa</Button>
      <Button>Oceania</Button>
    </ButtonGroup>
  );
}