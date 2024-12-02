import { HttpService } from '@nestjs/axios';
import { ConflictException, Controller, Get, Logger } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, Observable } from 'rxjs';

@Controller('api/v1/lr5')
export class Lr5Controller {
    private readonly logger = new Logger(Lr5Controller.name);
    
    constructor(private readonly httpService: HttpService) {}

    @Get()
    async findAll(): Promise<AxiosResponse<any>> {
        throw new Error("My Error")
        const { data } = await firstValueFrom(
            this.httpService.get<any>('https://dummyjson.com/users').pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(error.response.data);
                    throw 'An error happened!';
                }),
            ),
        );
        return data;
    }
}
