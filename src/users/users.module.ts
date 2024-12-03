import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProvidersModule } from '@app/providers';

@Module({
    imports: [ProvidersModule],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
