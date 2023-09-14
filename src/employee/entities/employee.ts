import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn()
  id:string;
  @Field()
  @Column()
  firstName: string;
  @Field({ nullable: true })
  @Column()
  lastName: string;
  @Field({ nullable: true })
  @Column()
  age: number;
  @Field({ nullable: true })
  @Column()
  city: string;
}