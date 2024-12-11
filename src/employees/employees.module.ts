import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PerformanceController } from './performance.controller';

@Module({
    controllers: [EmployeesController, PerformanceController],
    providers: [EmployeesService],
})
export class EmployeesModule {}
