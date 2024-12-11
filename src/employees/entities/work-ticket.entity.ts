import { Company } from 'src/companies/entities/company.entity';
import { Employee } from './employee.entity';

export class WorkTicket {
    id?: string;
    hours: number;
    createdAt?: string | Date;
    employee: Employee;
    company: Company;
}
