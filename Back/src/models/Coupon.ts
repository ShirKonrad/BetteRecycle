import {
    BaseEntity,
    Column,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Entity } from "typeorm/decorator/entity/Entity";
import { User } from "./User";
import { Product } from "./Product";
  
  @Entity()
  export class Coupon extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column({ nullable: true })
    redemptionTimestamp: Date;
    
    @Column()
    purchaseDate: Date;

    @ManyToMany(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => Product)
    product: Product;
  }
  