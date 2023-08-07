import { useCallback, useEffect, useState } from "react";
import { createContext, ReactNode } from "react";

interface IProps {
  children: React.ReactNode;
}

const defaultUser: IUser = {
  id: 23,
  name: "Avig Alog",
  gender: "M",
  credit: 260,
  score: 472,
  birthDate: new Date(2000, 1, 14),
  coupons: [
    {
      name: "עציץ כלשהו",
      price: 50.0,
      amount: 1,
      image:
        "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
    },
    {
      name: "הופעה כלשהי",
      price: 80,
      amount: 2,
      image:
        "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
    },
    {
      name: "שולחן כלשהו",
      price: 250,
      amount: 1,
      image:
        "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
    },
    {
      name: "עוד הופעה כלשהי",
      price: 110.0,
      amount: 1,
      image:
        "https://medias.hashulchan.co.il/www/uploads/2020/12/shutterstock_658408219-600x600.jpg",
    },
  ]
};

export const UserContext = createContext({
  user: defaultUser,
  setUser: (user: IUser) => {}
})

const UserContextProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>(defaultUser);

  const creditUse = (credit: number) => {
    setUser((prev: IUser) => {
      return {
        ...prev,
        credit: prev.credit - credit
      };
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>{children} </UserContext.Provider>
  );
};

export default UserContextProvider;

