import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { EventsGateway } from 'src/gateways/events/events.gateway';
import { OrderService } from './order.service';
import { Response } from 'express';
import { IProduct } from '@interfaces';

@Controller('order')
export class OrderController {
  constructor(
    private eventsGateway: EventsGateway,
    private orderService: OrderService,
  ) { }

  @Get()
  public getOrders(@Res() res: Response): void {
    res.status(200).json(this.orderService.getOrders());
  }

  @Post('request-order')
  public requestOrder(@Res() res: Response): void {
    this.eventsGateway.broadcastMessage({
      id: Guid.create().toString(),
      event: 'REQUEST_ORDER',
      data: null,
    });

    res.status(200).json('Order requested');
  }

  @Post('create-order')
  public createOrder(
    @Body() body: { products: IProduct[] },
    @Res() res: Response,
  ): void {
    this.orderService.createOrder(body.products);

    res.status(201).json('Order placed');
  }
}
