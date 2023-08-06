import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import cacheRtl from "./rtl-plugin";
import TopBar from "./components/TopBar/TopBar";

type RouteType = {
  path: string;
  element: ReactElement;
};

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const Router = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
      <div dir="rtl">
        <BrowserRouter>
          <TopBar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.element
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Router;
