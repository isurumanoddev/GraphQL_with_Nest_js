import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.input";
import { UpdateProjectDto } from "./dto/update-project.input";

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {
  }


  async findAll() {
    return await this.projectRepository.find({relations:['employees']})
  }

  async findProjectById(id:number):Promise<Project > {
    return this.projectRepository.findOneBy({id})
  }

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    console.log(project)
    return this.projectRepository.save(project)
  }


  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = this.projectRepository.create(updateProjectDto);
    project.id = id;
    return this.projectRepository.save(project)

  }
}
