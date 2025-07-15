import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { EventsGateway } from 'src/gateways/events/events.gateway';

@Module({
  controllers: [CartController],
  providers: [EventsGateway],
})
export class CartModule { }
