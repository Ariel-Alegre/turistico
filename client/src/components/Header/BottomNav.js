import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import './header.scss';
import SearchMobile from '../SearchMobile/SearchMobile';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recentes" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="" icon={<SearchMobile />} />
      </BottomNavigation>
    </div>
  );
}
