import { Prisma } from '@prisma/client';

export class CreateCompanyDto implements Prisma.CompanyCreateInput {
    id?: string;
    name: string;
}
