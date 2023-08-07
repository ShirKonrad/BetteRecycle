import React, { useEffect, useRef, useState } from "react";
import "./Product.css";

interface Props {
  name: string;
  price: number;
  amount?: number;
  expartionDate?: Date;
  image: string;
}

const Product: React.FC<Props> = (props: Props) => {
  return (
    <div className="product">
      {/* <img
        src={require(`C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/src/assets/Images/Tsadkani.jpg`)}
        alt="ma"
      /> */}
      <p className="header niceText">{props.name}</p>

      {props.amount ? (
        <p className="amount niceText">כמות: {props.amount}</p>
      ) : (
        <></>
      )}
      {props.expartionDate ? (
        <p className="amount niceText">
          תקף עד: {props.expartionDate.toLocaleDateString()}
        </p>
      ) : (
        <></>
      )}

      <button className="price niceText">מימוש ההטבה</button>
    </div>
  );
};

export default Product;
