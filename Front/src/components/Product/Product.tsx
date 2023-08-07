import React, { useEffect, useRef, useState } from "react";
import "./Product.css";

interface Props {
  name: string;
  price: number;
  amount?: number;
  code: string;
  image: string;
}

const Product: React.FC<Props> = (props: Props) => {
  return (
    // <div className="product">
    //   <img className="product__img"
    //     src={`https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg`}
    //     alt="ma"
    //   />
    //   <p className="product__header product__niceText">{props.name}</p>

    //   {props.amount ? (
    //     <p className="product__amount product__niceText">כמות: {props.amount}</p>
    //   ) : (
    //     <></>
    //   )}
    <div className="flip-card">
      <div className="product flip-card-inner">
        <img
          className="product__img flip-card-front"
          src={`https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg`}
          alt="ma"
        />
        <p className="product__header product__niceText flip-card-front">
          {props.name}
        </p>

        {props.amount ? (
          <p className="product__amount product__niceText flip-card-front">
            כמות: {props.amount}
          </p>
        ) : (
          <></>
        )}

        <button className="product__price product__niceText flip-card-front">
          מימוש ההטבה
        </button>

        <div className="flip-card-back">קוד למימוש ההטבה: {props.code}</div>
      </div>
    </div>
  );
};

export default Product;
