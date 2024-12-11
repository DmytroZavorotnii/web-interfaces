import { Controller, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('api/v1/employees/performance')
export class PerformanceController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get("/all")
    async getAllPerformance() {
        return this.employeesService.getAllPerformance();
    }

    @Get('/:id')
    async getPerformanceById(@Param('id') id: string) {
        return this.employeesService.getPerformanceById(id);
    }
}
