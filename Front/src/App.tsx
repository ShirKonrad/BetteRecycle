import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import cacheRtl from "./rtl-plugin";
import { Height } from "@mui/icons-material";
import Store from "./pages/Store/Store";
import "./general.css";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import UserContextProvider from "./contexts/userContext";

type RouteType = {
  path: string;
  element: ReactElement;
};

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/store",
    element: <Store />,
  },
];

const Router = () => {
  return (
    <div className="app">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <BrowserRouter>
              <TopBar />
              <div className="app__content">
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </div>
              <div className="app__bottom">
                <Navbar />
              </div>
            </BrowserRouter>
          </UserContextProvider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};

export default Router;
