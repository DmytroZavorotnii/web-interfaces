import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/providers';
import { Prisma, Company } from '@prisma/client';

@Injectable()
export class CompaniesService {
    constructor(private prisma: PrismaService) {}

    async findOne(
        companyWhereUniqueInput: Prisma.CompanyWhereUniqueInput
    ): Promise<Company | null> {
        return this.prisma.company.findUnique({
            where: companyWhereUniqueInput,
        });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CompanyWhereUniqueInput;
        where?: Prisma.CompanyWhereInput;
        orderBy?: Prisma.CompanyOrderByWithRelationInput;
    }): Promise<Company[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.company
            .findMany({
                skip,
                take,
                cursor,
                where,
                orderBy,
            })
            .catch((e) => e.message);
    }

    async create(data: Prisma.CompanyCreateInput): Promise<Company> {
        return this.prisma.company.create({
            data,
        });
    }

    async update(params: {
        where: Prisma.CompanyWhereUniqueInput;
        data: Prisma.CompanyUpdateInput;
    }): Promise<Company> {
        const { where, data } = params;
        return this.prisma.company.update({
            data,
            where,
        });
    }

    async delete(where: Prisma.CompanyWhereUniqueInput): Promise<Company> {
        return this.prisma.company.delete({
            where,
        });
    }
}
