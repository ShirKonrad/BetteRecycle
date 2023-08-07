import React, { useContext, useEffect, useRef, useState } from "react";
import "./ProductCard.css";
import { UserContext } from "../../contexts/userContext";

interface Props {
  product: IProduct;
  onProductClick: (prodId: number) => void;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const { user } = useContext(UserContext);
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
        <button
          className="btn bg-primary productCard__btn"
          onClick={() => props.onProductClick(props.product.id)}
          disabled={user.credit < props.product.price}
        >
          קנה
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
