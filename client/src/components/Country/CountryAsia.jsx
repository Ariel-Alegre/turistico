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

  const asia = [
    "Afganistán",
    "Arabia Saudita",
    "Armenia",
    "Azerbaiyán",
    "Bangladesh",
    "Baréin",
    "Birmania (Myanmar)",
    "Brunéi",
    "Bután",
    "Camboya",
    "Catar",
    "China",
    "Chipre",
    "Corea del Norte",
    "Corea del Sur",
    "Emiratos Árabes Unidos",
    "Filipinas",
    "Georgia",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Israel",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kirguistán",
    "Kuwait",
    "Laos",
    "Líbano",
    "Malasia",
    "Maldivas",
    "Mongolia",
    "Nepal",
    "Omán",
    "Pakistán",
    "Palestina",
    "Qatar",
    "Rusia",
    "Singapur",
    "Siria",
    "Sri Lanka",
    "Tailandia",
    "Tayikistán",
    "Timor Oriental",
    "Turkmenistán",
    "Turquía",
    "Uzbekistán",
    "Vietnam",
    "Yemen"
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        position: "relative",
        minHeight: 200,
        marginTop: "20px",
      }}
    >
      <TabPanel >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {asia.map((country) => (
            <Tab label={country} />
          ))}
        </Tabs>
      </TabPanel>
    </Box>
  );
}
