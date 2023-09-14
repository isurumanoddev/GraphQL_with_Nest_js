import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Employee } from "./entities/employee";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto } from "./dto/create-employee.input";

@Resolver(() => Employee)
export class EmployeeResolver {

  constructor(private employeeService: EmployeeService) {
  }

  @Query(() => [Employee], { name: "getAllEmployee" })
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Mutation(() =>Employee,{name:"createEmployee"})
  create(@Args("employee") employee: CreateEmployeeDto) {

    return  this.employeeService.create(employee);
  }

}
