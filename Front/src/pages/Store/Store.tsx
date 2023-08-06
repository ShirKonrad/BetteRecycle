import React, { useEffect, useRef, useState } from "react";
// import "./Store.css";
import Product from "../../components/Product/Product";

const products = [
  {
    name: "עציץ כלשהו",
    price: 50.0,
    amount: 1,
    image: "Front/assets/Images/Tsadkani.jpg",
  },
  {
    name: "הופעה כלשהי",
    price: 80,
    expartionDate: new Date(),
  },
  {
    name: "שולחן כלשהו",
    price: 250,
    amount: 1,
  },
  {
    name: "עוד הופעה כלשהי",
    price: 110.0,
    expartionDate: new Date(),
  },
];

interface Props {}

const Store: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {products.map((product) => (
        <Product
          name={product.name}
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
