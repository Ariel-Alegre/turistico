import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useNavigate, } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from 'react-redux'
import Box from "@mui/material/Box";
import { dataPersonal, logoutUser } from "../../redux/action";



export default function BasicMenu() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const datapersonal = useSelector(state => state.datapersonal);

  console.log(datapersonal);


  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    dispatch(dataPersonal(token))
  }, [token]);

  const handleLogout = () => {
    // Realizar el cierre de sesión en Redux
    dispatch(logoutUser());
    
    navigate('/');
    // Limpiar token en Local Storage
    
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
  };
  return (
    <div className="account-menu">
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="menu">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}

            >
              {token ? (

                <Avatar sx={{ width: 32, height: 32 }}>{datapersonal.name && datapersonal.name[0].toUpperCase()}</Avatar>
              ) : (
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </div>
      {token === null ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              minWidth: "200px",
              borderRadius: "1rem",
              boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
            },
          }}
        >


          <Link to='/auth/login' className="text-link">
            <MenuItem className="menu-items" onClick={handleClose}>
              Iniciar sesión
            </MenuItem>
          </Link>
          <Link to='/auth/register' className="text-link">
            <MenuItem onClick={handleClose} className="menu-items">
              Registrate
            </MenuItem>
          </Link>
          <div
            style={{
              height: "1px",
              backgroundColor: "var(--grey)",
              width: "100%",
            }}
          />

        </Menu>)
        : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": {
                minWidth: "200px",
                borderRadius: "1rem",
                boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
              },
            }}
          >



            <div
              style={{
                height: "1px",
                backgroundColor: "var(--grey)",
                width: "100%",
              }}
            />
            <Link to='/account-settings'>
              <MenuItem className="menu-items" onClick={handleClose}>
                Cuenta
              </MenuItem>
            </Link>
            <MenuItem className="menu-items" onClick={handleClose}>
              Informacion Personal
            </MenuItem>
            <MenuItem className="menu-items" onClick={handleClose}>
              Seguridad
            </MenuItem>
            <Link to='/public'>

              <MenuItem onClick={handleClose} className="menu-items">
                Publicar
              </MenuItem>
            </Link>

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Cerrar sesión
            </MenuItem>
          </Menu>)}
    </div>
  );
}
