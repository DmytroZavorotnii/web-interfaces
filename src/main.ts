import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from '@app/exception';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    const SERVICE_NAME = configService.get<string>('SERVICE_NAME', 'service');
    const SERVICE_PORT = configService.get<number>('SERVICE_PORT', 3009);

    const logger = new Logger('NestApplication');

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new GlobalExceptionFilter());
    app.setGlobalPrefix(`${SERVICE_NAME}`);

    if (process.env.NODE_ENV === 'development') {
        const config = new DocumentBuilder()
            .setTitle('Service API')
            .setDescription('API description')
            .setVersion('1.0.0')
            .build();

        const documentFactory = () => SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('swagger', app, documentFactory, {
            useGlobalPrefix: true,
        });
        logger.log(`Swagger is available at ${SERVICE_NAME ? `/${SERVICE_NAME}` : ``}/swagger`)
    }

    await app.listen(SERVICE_PORT, () =>
        logger.log(`${SERVICE_NAME ? SERVICE_NAME : `Service` } start at port ${SERVICE_PORT}`)
    );
}
bootstrap();
