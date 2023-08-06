import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Store from "./pages/Store/Store";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import cacheRtl from "./rtl-plugin";
import { Height } from "@mui/icons-material";

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
    element: <Store />,
  },
];

const Router = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="app" dir="rtl">
          <BrowserRouter>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </BrowserRouter>
          <Navbar />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Router;
