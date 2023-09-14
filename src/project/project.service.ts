import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.input";

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {
  }


  async findAll() {
    return await this.projectRepository.find({relations:['employees']})
  }

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);

    return this.projectRepository.save(project)
  }
}
