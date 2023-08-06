import React, { useEffect, useRef, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css";
import { green } from "@mui/material/colors";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {

    const [currentRoute, setRoute] = useState('Home');

  return (
    <BottomNavigation
    value={currentRoute}
  onChange={(event, newValue) => {
    setRoute(newValue);
  }}
  showLabels
>
  <BottomNavigationAction label="בית" icon={<HomeIcon />} />
  <BottomNavigationAction label="חנות" icon={<HomeIcon />} />
  <BottomNavigationAction label="חברים" icon={<HomeIcon />} />
</BottomNavigation>
  );
};

export default Navbar;