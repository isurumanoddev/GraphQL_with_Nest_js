import { Module } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from "./employee/entities/employee";
import { ProjectModule } from './project/project.module';
import { Project } from "./project/entities/project";
@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), "src/schema.gql")
  }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "graphql",
      entities: [Employee,Project],
      synchronize: true
    }),
    ProjectModule

  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
