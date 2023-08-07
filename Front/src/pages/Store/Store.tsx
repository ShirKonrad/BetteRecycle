import React, { useContext, useEffect, useRef, useState } from "react";
import "./Store.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { UserContext } from "../../contexts/userContext";

// interface Props {
//   products: IProduct[];
// }

const initialProducts: IProduct[] = [
  {
    id: 1,
    name: "פיצה",
    price: 500,
    description: "פיצה פצץ",
    availableAmount: 8,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 2,
    name: "גלידה",
    price: 40,
    description: "טעימה",
    availableAmount: 1,
    image:
      "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
  },
  {
    id: 3,
    name: "הופעה",
    price: 700,
    description: "לכל המשפחה",
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
  const { user, setUser } = useContext(UserContext);
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  const onProductClick = (id: number) => {
    const newProd = products.find((p) => p.id === id);
    console.log(newProd);
    // creditUse(products.find((p) => p.id === id)?.price || 0);
    if (newProd) {
      let newUser = {
        ...user,
        credit: user.credit - newProd.price,
      } as IUser;

      const coupon = newUser.coupons.find((c) => c.name === newProd.name);

      if (coupon) {
        newUser.coupons.forEach((c) =>
          c.name === coupon.name ? (c.amount = c.amount + 1) : c.amount
        );
      } else {
        newUser.coupons.push({
          name: newProd.name,
          image: newProd.image,
          amount:
            (newUser.coupons.find((p) => p.name === newProd.name)?.amount ||
              0) + 1,
          price: newProd.price,
          code: (Math.random() + 1).toString(36).substring(7),
        });
      }

      setUser(newUser);

      setProducts((prev: IProduct[]) => {
        return prev.map((prod) => {
          return prod.id === id
            ? {
                ...prod,
                amount: prod.availableAmount - 1,
              }
            : { ...prod };
        });
      });
    }
  };

  return (
    <div className="store">
      <div className="store__products">
        {products
          .filter((product) => product.availableAmount > 0)
          .map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Store;
