import { Field } from "@nestjs/graphql";

export class CreateProjectDto {
  @Field()

  name:string
  @Field()

  description:string
  @Field()

  startDate:Date
  @Field()

  endDate:Date
}