import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
	Put,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma } from '@prisma/client';

@Controller('api/v1/employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Post()
    async create(@Body() createEmployeeDto: CreateEmployeeDto) {
        return await this.employeesService.create(createEmployeeDto);
    }

    @Get()
    async findAll() {
        return await this.employeesService.findAll({});
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.employeesService.findOne({ id: id });
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateEmployeeDto: UpdateEmployeeDto
    ) {
        return await this.employeesService.update({
            where: { id: id },
            data: updateEmployeeDto,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.employeesService.delete({ id: id });
    }

    @Post('ticket')
    async createWorkTicket(@Body() data: Prisma.WorkTicketCreateInput) {
        return await this.employeesService.createWorkTicket(data)
    }
}
