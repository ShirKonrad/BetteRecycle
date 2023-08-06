import React, { useEffect, useRef, useState } from "react";
import "./Store.css";
import Product from "../../components/Product/Product";

const products = [
  {
    name: "עציץ כלשהו",
    price: 50.0,
    amount: 1,
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
  {
    name: "הופעה כלשהי",
    price: 80,
    expartionDate: new Date(),
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
  {
    name: "שולחן כלשהו",
    price: 250,
    amount: 1,
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
  {
    name: "עוד הופעה כלשהי",
    price: 110.0,
    expartionDate: new Date(),
    image:
      "C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg",
  },
];

interface Props {}

const Store: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="head">ההטבות שלי</div>

      {products.map((product) => (
        <Product
          name={product.name}
          key={product.name}
          price={product.price}
          amount={product.amount}
          expartionDate={product.expartionDate}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Store;
