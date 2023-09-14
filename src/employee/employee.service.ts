import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./entities/employee";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.input";

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee>) {
  }


  async findAll() {
    return this.employeeRepository.find()
  }

  async create(employeeCreateDto:CreateEmployeeDto) {
    const employee = this.employeeRepository.create(employeeCreateDto);

    return this.employeeRepository.save(employee)

  }
}
