import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "../../project/entities/project";

@ObjectType()
@Entity()
export class Employee {
  @Field(type =>Int)
  @PrimaryGeneratedColumn()
  id:number;
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

  @Field({ nullable: false })
  @Column()
  projectId: number;

  @ManyToOne(() => Project, project => project.employees)
  @Field(()=>Project,{nullable:false})
  project: Project;

}