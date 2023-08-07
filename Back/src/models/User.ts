import {
  BaseEntity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  credit: number;

  @Column()
  score: number;

  @Column()
  birthDate: Date;

  @OneToMany(() => User, (user) => user.id)
  friends?: User[];
}
