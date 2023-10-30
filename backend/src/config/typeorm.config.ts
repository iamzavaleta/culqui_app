import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'culqui',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts: 10,
}