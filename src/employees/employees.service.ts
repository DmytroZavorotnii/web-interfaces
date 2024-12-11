import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/providers';
import { Employee, Prisma, WorkTicket } from '@prisma/client';

@Injectable()
export class EmployeesService {
    constructor(private prisma: PrismaService) {}

    async findOne(
        employeeWhereUniqueInput: Prisma.EmployeeWhereUniqueInput
    ): Promise<Employee | null> {
        return this.prisma.employee.findUnique({
            where: employeeWhereUniqueInput,
        });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EmployeeWhereUniqueInput;
        where?: Prisma.EmployeeWhereInput;
        orderBy?: Prisma.EmployeeOrderByWithRelationInput;
    }): Promise<Employee[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.employee
            .findMany({
                skip,
                take,
                cursor,
                where,
                orderBy,
            })
            .catch((e) => e.message);
    }

    async create(data: Prisma.EmployeeCreateInput): Promise<Employee> {
        return this.prisma.employee.create({
            data,
        });
    }

    async update(params: {
        where: Prisma.EmployeeWhereUniqueInput;
        data: Prisma.EmployeeUpdateInput;
    }): Promise<Employee> {
        const { where, data } = params;
        return this.prisma.employee.update({
            data,
            where,
        });
    }

    async delete(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee> {
        return this.prisma.employee.delete({
            where,
        });
    }

	async createWorkTicket(data: Prisma.WorkTicketCreateInput): Promise<WorkTicket> {
		return this.prisma.workTicket.create({
			data,
		});
	}

	// Загальний час роботи та по компаніях
	async getAllPerformance() {
		const workTickets = await this.prisma.workTicket.findMany({
		  include: {
			company: true,
			employee: true,
		  },
		});
	
		const performance = workTickets.reduce((acc, ticket) => {
		  const { employeeId, hours, company, employee } = ticket;
	
		  if (!acc[employeeId]) {
			acc[employeeId] = {
			  employeeId,
			  employeeName: employee.name,
			  totalHours: 0,
			  companyHours: [],
			};
		  }
	
		  // Загальний час роботи
		  acc[employeeId].totalHours += hours;
	
		  // Час роботи по компаніях
		  let companyRecord = acc[employeeId].companyHours.find(
			(ch) => ch.companyId === company.id,
		  );
	
		  if (!companyRecord) {
			companyRecord = {
			  companyId: company.id,
			  companyName: company.name,
			  hours: 0,
			};
			acc[employeeId].companyHours.push(companyRecord);
		  }
	
		  companyRecord.hours += hours;
	
		  return acc;
		}, {});
	
		return Object.values(performance);
	  }
	
	  // Час роботи для конкретного працівника
	  async getPerformanceById(employeeId: string) {
		const workTickets = await this.prisma.workTicket.findMany({
		  where: { employeeId },
		  include: { company: true },
		});
	
		const totalHours = workTickets.reduce((sum, ticket) => sum + ticket.hours, 0);
	
		const companyHours = workTickets.reduce((acc, ticket) => {
		  const { company, hours } = ticket;
	
		  let companyRecord = acc.find((ch) => ch.companyId === company.id);
		  if (!companyRecord) {
			companyRecord = {
			  companyId: company.id,
			  companyName: company.name,
			  hours: 0,
			};
			acc.push(companyRecord);
		  }
	
		  companyRecord.hours += hours;
	
		  return acc;
		}, []);
	
		return {
		  employeeId,
		  totalHours,
		  companyHours,
		};
	  }
}
