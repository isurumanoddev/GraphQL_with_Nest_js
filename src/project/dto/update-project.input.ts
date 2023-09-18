import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateProjectDto {
  @Field()
  id: number;
  @Field()

  name: string;
  @Field()

  description: string;

}