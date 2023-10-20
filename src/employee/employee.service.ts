import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entities/employee";
import { FindOneOptions, Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.input";
import { ProjectService } from "../project/project.service";
import { Project } from "../project/entities/project";
import { UpdateEmployeeInput } from "./dto/update-employee.input";

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>,
                private projectService: ProjectService
    ) {
    }
    async findAll() {
        return this.employeeRepository.find({relations:['project']})
    }

    async findEmoloyeeById(id:number):Promise<Employee |null> {
        return this.employeeRepository.findOneBy({ id })
    }




}