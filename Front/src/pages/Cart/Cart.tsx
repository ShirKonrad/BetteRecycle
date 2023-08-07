import React, { useContext, useEffect, useRef, useState } from "react";
import "./Cart.css";
import Product from "../../components/Product/Product";
import { UserContext } from "../../contexts/userContext";

interface Props {}

const Cart: React.FC<Props> = (props: Props) => {

  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="head">
        <p className="headText">ההטבות שלי</p>
        <div className="headCircle">{user.coupons.length}</div>
      </div>

      {user.coupons.map((product) => (
        <Product
          name={product.name}
          key={product.name}
          price={product.price}
          amount={product.amount}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Cart;
