import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./header.scss";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <AccountCircleRoundedIcon />
      </div>
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
        <Link to='/account-settings'>
         <MenuItem className="menu-items" onClick={handleClose}>
        Cuenta 
        </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} className="menu-items">
         Ayúda
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Host an experience
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Help
        </MenuItem>
      </Menu>
    </div>
  );
}
