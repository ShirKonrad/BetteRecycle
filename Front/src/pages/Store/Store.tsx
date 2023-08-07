import React, { useEffect, useRef, useState } from "react";
import "./Store.css";
import ProductCard from "../../components/ProductCard/ProductCard";

interface Props {
  products: IProduct[];
}

const Store: React.FC<Props> = (props: Props) => {
    const onProductClick  = (id: number) => {
        console.log("product", id, "was selected");
    }

  return (
    <div className="store">
      {/* <h2 className="store__header">חנות</h2> */}
      <div className="store__products">
        {props.products
          .filter(
            (product) => product.availableAmount && product?.availableAmount > 0
          )
          .map((product) => {
            return <ProductCard key={product.id} product={product} onProductClick={onProductClick}/>;
          })}
      </div>
    </div>
  );
};

export default Store;
