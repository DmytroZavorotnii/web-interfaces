import { Response } from 'express';

export class ResponseEntity<T> {
    message: string;
    statusCode: number;
    data?: T;

    constructor(message: string, statusCode: number, data?: T) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }

    toRes(res: Response) {
        res.status(this.statusCode).json(this);
        return;
    }
}
