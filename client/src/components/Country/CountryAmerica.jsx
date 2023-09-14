import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { containerClasses } from "@mui/material";
import "./index.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Table, Flag } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [values, setValues] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

export default function CountryAmerica() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      sx: fabStyle,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      sx: fabStyle,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  const america = [
    { name: 'Argentina', countryCode: 'ar' },
    { name: 'Bolivia', countryCode: 'bo' },
    { name: 'Brazil', countryCode: 'br' },
    { name: 'Canada', countryCode: 'ca' },
    { name: 'Chile', countryCode: 'cl' },
    { name: 'Colombia', countryCode: 'co' },
    { name: 'Costa Rica', countryCode: 'cr' },
    { name: 'Cuba', countryCode: 'cu' },
    { name: 'Dominican Republic', countryCode: 'do' },
    { name: 'Ecuador', countryCode: 'ec' },
    { name: 'El Salvador', countryCode: 'sv' },
    { name: 'Guatemala', countryCode: 'gt' },
    { name: 'Haiti', countryCode: 'ht' },
    { name: 'Honduras', countryCode: 'hn' },
    { name: 'Jamaica', countryCode: 'jm' },
    { name: 'Mexico', countryCode: 'mx' },
    { name: 'Nicaragua', countryCode: 'ni' },
    { name: 'Panama', countryCode: 'pa' },
    { name: 'Paraguay', countryCode: 'py' },
    { name: 'Peru', countryCode: 'pe' },
    { name: 'Puerto Rico', countryCode: 'pr' },
    { name: 'Trinidad and Tobago', countryCode: 'tt' },
    { name: 'United States', countryCode: 'us', alias: 'America' },
    { name: 'Uruguay', countryCode: 'uy' },
    { name: 'Venezuela', countryCode: 've' }
  ];
  
  // Puedes acceder a la lista de países de América a través de la variable 'countries'
  



const flagRenderer = (item) => <Flag name={item.countryCode}/>
  
  return (
    <div className="country-container">
        <Splide
        options={{
          type: "slide", // Tipo de transición (slide)
          perMove: 1, // Número de elementos a mover en cada transición
          perPage: window.innerWidth < 480 ? 2 : 7,
        }}
        >
  {america.map((country) => (
    <SplideSlide
      key={country}
      label={country}
      
    >
      <label className="country-filter">

      {flagRenderer(country)}{country.name}
      </label>
    </SplideSlide>
  ))}

      </Splide>
    </div>
  );
}
