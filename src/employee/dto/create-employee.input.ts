import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateEmployeeDto {

  @Field()
  firstName: string;
  @Field({ nullable: true })
  lastName: string;
  @Field({ nullable: true })
  age: number;
  @Field({ nullable: true })
  city: string;
  @Field({ nullable: true })
  projectId: number;

}