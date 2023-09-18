import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../../employee/entities/employee";

@ObjectType()
@Entity()
export class Project {
  @Field(type =>Int)
  @PrimaryGeneratedColumn()
  id:number
  @Field()
  @Column()
  name:string
  @Field()
  @Column()
  description:string

  @OneToMany(() => Employee, employee => employee.project)
  @Field(()=>[Employee],{nullable:true})
  employees: Employee[];


}