import { WorkTicket } from './work-ticket.entity';

export class Employee {
    id?: string;
    name: string;
    position: string;
    workTickets?: WorkTicket;
}
