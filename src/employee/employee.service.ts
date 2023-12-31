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

    async create(employeeCreateDto:CreateEmployeeDto) {
        const employee = this.employeeRepository.create(employeeCreateDto);
        console.log("employeeCreateDto",employeeCreateDto)

        return await this.employeeRepository.save(employee)

    }

    async getProject(id: number): Promise<Project> {
        return this.projectService.findProjectById(id)
    }

    async update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
        const employee:Employee = this.employeeRepository.create(updateEmployeeInput);
        employee.id = id;
        return await this.employeeRepository.save(employee)

    }





}