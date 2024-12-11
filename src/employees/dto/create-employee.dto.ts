import { Prisma } from '@prisma/client';

export class CreateEmployeeDto implements Prisma.EmployeeCreateInput {
    id?: string;
    name: string;
    position: string;
}
