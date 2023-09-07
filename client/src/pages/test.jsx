import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import CountryAmerica from '../components/Country/CountryAmerica';

export default function SimpleFade() {
  const [checked, setChecked] = React.useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evita que el evento se propague y cierre inmediatamente
    setChecked((prev) => !prev);
  };

  const handleDocumentClick = (e) => {
    // Verificar si el clic ocurrió dentro del componente CountryAmerica
    if (!e.target.closest('#countryAmericaContainer')) {
      setChecked(false); // Ocultar el componente si se hizo clic fuera de él
    }
  };

  React.useEffect(() => {
    // Agregar el manejador de clics al documento cuando el componente está montado
    document.addEventListener('click', handleDocumentClick);

    // Limpia el manejador de clics cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Box sx={{ height: 180 }}>
      <Button onClick={handleButtonClick} variant="contained" color="primary">
        {checked ? 'Hide' : 'Show'}
      </Button>
      <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>
          <div id="countryAmericaContainer">
            {checked && <CountryAmerica />}
          </div>
        </Fade>
      </Box>
    </Box>
  );
}
