import React, { useCallback, useEffect, useRef, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
// import Store from "../../pages/Store/Store";
// import Home from "../../pages/Home/Home";
// import Cart from "../../pages/Cart/Cart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PeopleIcon from "@mui/icons-material/People";
import { routes } from "../../App";

interface Props {}

const actions = [
  {
    label: "בית",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    label: "ההטבות שלי",
    icon: <LocalMallIcon />,
    to: "/cart",
  },

  {
    label: "חנות",
    icon: <LocalGroceryStoreIcon />,
    to: "/store",
  },
  {
    label: "Community",
    icon: <PeopleIcon />,
    to: "/friends",
  },
];

const Navbar: React.FC<Props> = (props: Props) => {
  const [currentRoute, setRoute] = useState(0);

  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();

  const onNavigate = useCallback(
    (event: any, newValue: number) => {
      setRoute(newValue);
      navigate(actions[newValue].to);
    },
    [navigate]
  );

  useEffect(() => {
    const actionIndex = actions.findIndex(
      (action) => action.to === location.pathname
    );

    // const route = routes.find((route) => route.path === location.pathname);
    // setShow(
    //   route?.showBottomToolbar !== undefined ? route?.showBottomToolbar : false
    // );

    setValue((prev) => (actionIndex >= 0 ? actionIndex : prev));
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={currentRoute}
      onChange={onNavigate}
      sx={{
        "&.MuiBottomNavigation-root": {
          background: "#FBFBFF",
          height: "8vh",
        },
        "& .Mui-selected": {
          color: "var(--primary-bg-color2)",
        },
        "& .Mui-selected svg": {
          color: "var(--primary-bg-color2)",
        },
      }}
      showLabels>
      {actions.map((action) => (
        <BottomNavigationAction
          key={action.to}
          id={action.label}
          label={action.label}
          icon={action.icon}
        />
      ))}
    </BottomNavigation>
  );
};

export default Navbar;
