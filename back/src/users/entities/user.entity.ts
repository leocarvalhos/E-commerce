import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  store_name: string;

  @Column({ unique: true })
  email: string;

  @Column("text")
  password: string;
}
