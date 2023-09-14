import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProjectService } from "./project.service";
import { Project } from "./entities/project";
import { CreateProjectDto } from "./dto/create-project.input";

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {
  }

  @Query(() => [Project], { name: "getAllProjects" })
  findAll():Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Mutation(()=>Project,{name:"createProject"})
  create(@Args('project') project:CreateProjectDto) {
    return this.projectService.create(project)
  }

}
