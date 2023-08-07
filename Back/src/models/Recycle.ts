import {
    BaseEntity,
    Column,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Entity } from "typeorm/decorator/entity/Entity";
import { User } from "./User";
import { BottleType } from "./BottleType";
  
  @Entity()
  export class Recycle extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    timestamp: Date;
  
    @Column()
    quantity: number;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => BottleType)
    type: BottleType;
  }
  