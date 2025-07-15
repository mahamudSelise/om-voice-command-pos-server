import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { EventsGateway } from 'src/gateways/events/events.gateway';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers: [EventsGateway, OrderService],
})
export class OrderModule { }
