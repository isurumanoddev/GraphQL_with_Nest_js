import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entities/employee";
import { FindOneOptions, Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.input";

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee> ,

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
}
