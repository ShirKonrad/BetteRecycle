import React, { useEffect, useRef, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./Navbar.css";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  const [currentRoute, setRoute] = useState("Home");

  return (
    <BottomNavigation
      className="navbar"
      value={currentRoute}
      onChange={(event, newValue) => {
        setRoute(newValue);
        window.location.href = `http://localhost:3000${newValue}`;
      }}
      showLabels
    >
      <BottomNavigationAction label="בית" value={""} icon={<HomeIcon />} />
      <BottomNavigationAction
        label="חנות"
        value={"/cart"}
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="חברים"
        value={"/store"}
        icon={<HomeIcon />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
