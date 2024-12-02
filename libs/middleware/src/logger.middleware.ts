import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger(LoggerMiddleware.name);

    use(request: Request, response: Response, next: NextFunction) {
        const requestTimestamp = Date.now();
        const { ip, method, baseUrl: url } = request;
        const userAgent = request.get('user-agent') || '';

        response.on('close', () => {
            const { statusCode } = response;
            const responseTimestamp = Date.now();
            this.logger.log(
                `${statusCode} ${method} ${url} ${responseTimestamp - requestTimestamp}ms - ${userAgent} ${ip}`
            );
        });

        next();
    }
}
