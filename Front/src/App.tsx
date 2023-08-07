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
import "./App.css"

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
    path: "/cart",
    element: <Cart />,
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
          <TopBar/>
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
              {/* BottomTollbar component */}
            </div>
          </BrowserRouter>
          <Navbar />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Router;
