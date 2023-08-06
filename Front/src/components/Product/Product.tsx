import React, { useEffect, useRef, useState } from "react";
// import "./Home.css";

interface Props {
  name: string;
  price: number;
  amount?: number;
  expartionDate?: Date;
  image?: string;
}

const Product: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <img
        src={require(`C:/Users/yahel/OneDrive/שולחן העבודה/BetteRecycle/Front/assets/Images/Tsadkani.jpg`)}
        alt="ma"
      />
    </div>
  );
};

export default Product;
