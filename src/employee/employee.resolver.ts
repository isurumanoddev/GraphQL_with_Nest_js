import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Employee } from "./entities/employee";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto } from "./dto/create-employee.input";
import { Project } from "../project/entities/project";
import { UpdateEmployeeInput } from "./dto/update-employee.input";

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {
  }
  @Query(() => [Employee], { name: "getAllEmployee" })
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: "getEmployeeById" })
  findById(@Args("id", { type: () => Int }) id: number) {
    return this.employeeService.findEmoloyeeById(id);
  }


  @Mutation(() => Employee, { name: "createEmployee" })
  create(@Args("employee") employee: CreateEmployeeDto) {

    return this.employeeService.create(employee);
  }

  @ResolveField(() => Project)
  project(@Parent() employee: Employee) {
    return this.employeeService.getProject(employee.projectId);
  }


  @Mutation(() => Employee, { name: "updateEmployee" })
  updateEmployee(@Args("updateEmployeeInput") updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeeService.update(updateEmployeeInput.id,updateEmployeeInput)

  }


}
