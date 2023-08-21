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

  const africa = [
    "Angola",
    "Argelia",
    "Benín",
    "Botsuana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Camerún",
    "Chad",
    "Comoras",
    "Congo",
    "Costa de Marfil",
    "Egipto",
    "Eritrea",
    "Esuatini (Suazilandia)",
    "Etiopía",
    "Gabón",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Guinea Ecuatorial",
    "Kenia",
    "Lesoto",
    "Liberia",
    "Libia",
    "Madagascar",
    "Malaui",
    "Malí",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "Mozambique",
    "Namibia",
    "Níger",
    "Nigeria",
    "República Centroafricana",
    "República Democrática del Congo",
    "Ruanda",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leona",
    "Somalia",
    "Sudáfrica",
    "Sudán",
    "Sudán del Sur",
    "Tanzania",
    "Togo",
    "Túnez",
    "Uganda",
    "Yibuti",
    "Zambia",
    "Zimbabue"
  ];

  return (
    <Box
    className = 'country-container'
    >
      <TabPanel className = 'panel'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className="custom-tabs"
        >
          {africa.map((country) => (
            <Tab id="country" label={country}  />
          ))}
        </Tabs>
      </TabPanel>
    </Box>
  );
}
