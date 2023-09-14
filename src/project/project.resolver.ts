import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProjectService } from "./project.service";
import { Project } from "./entities/project";

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {
  }

  @Query(() => [Project], { name: "getAllProjects" })
  findAll() {
    return this.projectService.findAll();
  }


}
