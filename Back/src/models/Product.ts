import {
    BaseEntity,
    Column,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Entity } from "typeorm/decorator/entity/Entity";
  
  @Entity()
  export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    availableAmount: number;
  }
  