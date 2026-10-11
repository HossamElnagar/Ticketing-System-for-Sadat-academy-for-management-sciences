import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import {MongooseModule} from "@nestjs/mongoose";
import { TicketsModule } from './tickets/tickets.module.js';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sadat-ticketing-service'),
    TicketsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}