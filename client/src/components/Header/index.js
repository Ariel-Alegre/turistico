import React from "react";
import logo from "../../assets/logo/Logo.jpg";
import "./header.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Search from "../Search/Search";

function Header() {
  return (
    <div className="navbar-container">
      <Link to = '/'>
      <img src={logo} alt="logo" className="navbar-logo" />
      </Link>
      <div className="search-bar">
        <Search/>
     
      </div>
      <div className="profile-container">
        <Link to="/public">
        </Link>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
