import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@app/config';
import { UsersModule } from './users/users.module';
import { Lr5Module } from './lr5/lr5.module';
import { LoggerMiddleware } from 'middleware/middleware';
import { ProvidersModule } from '@app/providers';

@Module({
    imports: [ConfigModule, UsersModule, Lr5Module],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
