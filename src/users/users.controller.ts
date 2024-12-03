import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Res,
    Put,
    HttpStatus,
    HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { Prisma } from '@prisma/client';
import { ResponseEntity } from '@app/types';
import { UserCreateDto } from './dto/user.create.dto';

@Controller('/api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(@Res() res: Response) {
        const users = await this.usersService.findAll({});
        return new ResponseEntity(
            `Found ${users.length} users`,
            200,
            users
        ).toRes(res);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() res: Response) {
        const user = await this.usersService.findOne({ id: id });

        if (user === null)
            return new ResponseEntity('User not found', 400).toRes(res);
        else return new ResponseEntity('User found', 200, user).toRes(res);
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    async create(
        @Body() createUserDto: UserCreateDto,
        @Res() res: Response
    ) {
        const user = await this.usersService.create(createUserDto);
        return new ResponseEntity('User created', 200, user).toRes(res);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UserCreateDto,
        @Res() res: Response
    ) {
        const user = await this.usersService.update({
            where: { id: id },
            data: updateUserDto,
        }).catch(e => console.log(e.message));
        return new ResponseEntity('User updated', 200, user).toRes(res);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response) {
        const user = await this.usersService.delete({ id: id });
        return new ResponseEntity('User deleted', 200, user).toRes(res);
    }
}
