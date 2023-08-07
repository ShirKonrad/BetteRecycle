import React, { useEffect, useRef, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./Navbar.css";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  const [currentRoute, setRoute] = useState("Home");

  return (
    <BottomNavigation
      value={currentRoute}
      onChange={(event, newValue) => {
        window.location.href = `http://localhost:3000${newValue}`;
        setRoute(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="בית" value={""} icon={<HomeIcon />} />
      <BottomNavigationAction
        label="ההטבות שלי"
        value={"/cart"}
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="חנות"
        value={"/store"}
        icon={<HomeIcon />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
