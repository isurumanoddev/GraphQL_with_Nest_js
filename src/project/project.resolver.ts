import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProjectService } from "./project.service";
import { Project } from "./entities/project";
import { CreateProjectDto } from "./dto/create-project.input";
import { UpdateProjectDto } from "./dto/update-project.input";

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {
  }

  @Query(() => [Project], { name: "getAllProjects" })
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: "getProjectById" })
  findOne(@Args("id",{type:()=>Int}) id: number) {
    return this.projectService.findProjectById(id)
  }

  @Mutation(() => Project, { name: "createProject" })
  create(@Args("project") project: CreateProjectDto) {
    return this.projectService.create(project);
  }

  @Mutation(() => Project,{name:"updateProject"})
  updateProject(@Args("project" ,{type:()=>Int}) project: UpdateProjectDto) {
    return this.projectService.update(project.id,project)
  }

}
