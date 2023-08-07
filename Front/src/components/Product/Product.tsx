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
      <img className="product__img"
        src={`https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg`}
        alt="ma"
      />
      <p className="product__header product__niceText">{props.name}</p>

      {props.amount ? (
        <p className="product__amount product__niceText">כמות: {props.amount}</p>
      ) : (
        <></>
      )}
      {props.expartionDate ? (
        <p className="product__amount product__niceText">
          תקף עד: {props.expartionDate.toLocaleDateString()}
        </p>
      ) : (
        <></>
      )}

      <button className="product__price product__niceText">מימוש ההטבה</button>
    </div>
  );
};

export default Product;
