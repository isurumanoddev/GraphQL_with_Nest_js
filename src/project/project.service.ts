import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {
  }


  async findAll() {
    return await this.projectRepository.find()
  }
}
