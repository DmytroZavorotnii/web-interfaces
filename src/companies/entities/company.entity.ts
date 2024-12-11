import { WorkTicket } from 'src/employees/entities/work-ticket.entity';

export class Company {
    id?: string;
    name: string;
    workTickets?: WorkTicket;
}
