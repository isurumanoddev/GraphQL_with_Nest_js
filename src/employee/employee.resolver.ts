import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Employee } from "./entities/employee";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto } from "./dto/create-employee.input";
import { Project } from "../project/entities/project";
import { UpdateEmployeeInput } from "./dto/update-employee.input";

@Resolver(() => Employee)
export class EmployeeResolver {


}
