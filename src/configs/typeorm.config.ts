import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvironmentService } from "./environments";
import { School } from "src/admin/entity/school.entity";



export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: EnvironmentService.getValue('db_host'),
    port: Number(EnvironmentService.getValue('db_port')),
    username: EnvironmentService.getValue('db_user'),
    password: EnvironmentService.getValue('DB_PASSWORD'),
    database: EnvironmentService.getValue('db_name'),
    entities: [School],
    synchronize: true,

}