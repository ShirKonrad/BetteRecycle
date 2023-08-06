import {
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Entity } from "typeorm/decorator/entity/Entity";
  
  @Entity()
  export class BottleType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
    @Column()
    scoreValue: number;
  }
  