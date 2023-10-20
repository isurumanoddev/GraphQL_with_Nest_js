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





}