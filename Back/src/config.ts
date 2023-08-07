import { DataSource } from "typeorm";
import { User } from "./models/User";
import { Recycle } from "./models/Recycle";
import { BottleType } from "./models/BottleType";
import { Coupon } from "./models/Coupon";
import { Product } from "./models/Product";
// import { DatabaseConnectionError } from "./errors/databaseConnectionError";


require('dotenv').config();

export const AppDataSource = new DataSource({
  host: "34.165.194.175",
  database: "postgres",
  username: "postgres",
  password: "HackathonLogmar2023",
  port: 5432,
  type: 'postgres',
  synchronize: false,
  logging: false,
  entities: [User, Recycle, BottleType, Coupon, Product],
});
 

export const connectToDb = async () => {
  await AppDataSource.initialize().catch((error) => {
    console.log(error);
    throw new Error();
  });
  console.log("Connected to database");
};