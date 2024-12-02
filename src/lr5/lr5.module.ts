import { Module } from '@nestjs/common';
import { Lr5Controller } from './lr5.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [Lr5Controller],
})
export class Lr5Module {}
