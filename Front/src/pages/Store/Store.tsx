import React, { useEffect, useRef, useState } from "react";
import "./Store.css";
import ProductCard from "../../components/ProductCard/ProductCard";

// interface Props {
//   products: IProduct[];
// }

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

const Store: React.FC = () => {
    const onProductClick  = (id: number) => {
        console.log("product", id, "was selected");
    }

  return (
    <div className="store">
      {/* <h2 className="store__header">חנות</h2> */}
      <div className="store__products">
        {products
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
