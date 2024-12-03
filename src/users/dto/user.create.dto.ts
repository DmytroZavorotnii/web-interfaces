import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsEmail, IsInt, IsOptional, IsString } from "class-validator";

export class UserCreateDto implements Prisma.UserCreateInput {
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty({ description: "Email address of the user", type: String, example: "test@example.com" })
    @IsEmail()
    email: string;

    @ApiProperty({ description: "Name of the user", type: String, example: "Test User" })
    @IsString()
    name: string;

    @ApiProperty({ description: "Age of the user", type: Number, example: 18 })
    @IsInt()
    age: number;
}