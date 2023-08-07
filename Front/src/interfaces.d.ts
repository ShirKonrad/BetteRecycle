interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  availableAmount: number;
  image: string;
}

interface IUser {
  id: number;
  name: string;
  gender: string;
  credit: number;
  score: number;
  birthDate: Date;
  friends?: IUser[];
  coupons: ICoupon[];
}

interface ICoupon {
  name: string;
  price: number;
  amount: number;
  code: string;
  image: string;
}
