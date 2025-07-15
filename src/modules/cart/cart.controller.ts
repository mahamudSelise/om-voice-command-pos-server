import { Controller, Post } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { EventsGateway } from 'src/gateways/events/events.gateway';

@Controller('cart')
export class CartController {
  constructor(private eventsGateway: EventsGateway) { }

  @Post('add-to-cart')
  public addToCart(): void {
    this.eventsGateway.broadcastMessage({
      id: Guid.create().toString(),
      event: 'ADD_TO_CART',
      data: null,
    });
  }

  @Post('clear-cart')
  public clearCart(): void {
    this.eventsGateway.broadcastMessage({
      id: Guid.create().toString(),
      event: 'CLEAR_CART',
      data: null,
    });
  }
}
