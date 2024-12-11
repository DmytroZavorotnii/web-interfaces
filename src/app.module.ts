import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@app/config';
import { LoggerMiddleware } from 'middleware/middleware';
import { CompaniesModule } from './companies/companies.module';
import { EmployeesModule } from './employees/employees.module';
import { ProvidersModule } from '@app/providers';

@Module({
    imports: [ConfigModule, CompaniesModule, EmployeesModule, ProvidersModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
