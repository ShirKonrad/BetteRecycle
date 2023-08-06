import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import theme from "./theme";
import cacheRtl from "./rtl-plugin";
import Store from "./pages/Store/Store";
import "./general.css";

const products: IProduct[] = [
  {
    id: 1,
    name: "פיצה",
    price: 40,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 2,
    name: "פיצה",
    price: 40,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 3,
    name: "פיצה",
    price: 40,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 4,
    name: "פיצה",
    price: 40,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 5,
    name: "פיצה",
    price: 40,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 6,
    name: "פיצה",
    price: 40,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
];

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
    path: "/store",
    element: <Store products={products} />,
  },
];

const Router = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
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
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Router;
