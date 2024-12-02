import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from '@app/exception';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    const SERVICE_NAME = configService.get<string>('SERVICE_NAME', 'service');
    const SERVICE_PORT = configService.get<number>('SERVICE_PORT', 3009);

    const logger = new Logger('NestApplication');

    app.useGlobalFilters(new GlobalExceptionFilter());
    app.setGlobalPrefix(`${SERVICE_NAME}`);

    await app.listen(SERVICE_PORT, () =>
        logger.log(`${SERVICE_NAME} start at port ${SERVICE_PORT}`)
    );
}
bootstrap();
