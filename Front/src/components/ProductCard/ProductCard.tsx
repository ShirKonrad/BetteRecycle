import React, { useEffect, useRef, useState } from "react";
import "./ProductCard.css";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="productCard">
      <img className="productCard__img" src={props.product.image} />
      <div className="productCard__details">
        <div className="productCard__desc">
          <span className="productCard__desc-item">
            שם: {props.product.name}
          </span>
          <span className="productCard__desc-item">
            תיאור: {props.product.description}
          </span>
          <span className="productCard__desc-item">
            מחיר: {props.product.price}
          </span>
        </div>
        <button className="btn bg-primary productCard__btn">קנה</button>
      </div>
    </div>
  );
};

export default ProductCard;
