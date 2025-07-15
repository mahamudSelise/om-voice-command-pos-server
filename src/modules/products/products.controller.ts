import { IProduct } from '@interfaces';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { EventsGateway } from 'src/gateways/events/events.gateway';
import {
  ISelectProductEvent,
  ISelectProductWithAddOnEvent,
} from 'src/interfaces/event.interface';
import { Response } from 'express';
import { Guid } from 'guid-typescript';

@Controller('products')
export class ProductsController {
  constructor(
    private eventsGateway: EventsGateway,
    private readonly productService: ProductsService,
  ) { }

  @Get()
  public getAllProducts(): IProduct[] {
    const products = this.productService.getAllProducts();

    return products || [];
  }

  @Post('select-product')
  public selectProduct(
    @Body() body: { productId: string; addOnIds?: string[] },
    @Res() res: Response,
  ): void {
    if (!body || !body.productId) {
      res.status(404).json("Required property missing: 'productId'");
    }

    const { productId, addOnIds } = body;

    const product = this.productService.getProductById(productId);

    if (!product) {
      res.status(404).json('Product not found');
      return;
    }

    if (addOnIds && addOnIds.length) {
      const availableAddOnIds = product.addOns.map((a) => a.id);

      const unavailableAddOnIds = addOnIds.filter(
        (addOnId) => !availableAddOnIds.includes(addOnId),
      );

      if (unavailableAddOnIds.length) {
        res
          .status(404)
          .json(
            'Add on not found in product ' + unavailableAddOnIds.join(', '),
          );
        return;
      }
    }

    this.eventsGateway.broadcastMessage({
      id: Guid.create().toString(),
      event: 'SELECT_PRODUCT',
      data: { product } as ISelectProductEvent,
    });

    this.eventsGateway.broadcastMessage({
      id: Guid.create().toString(),
      event: 'SELECT_ADDON',
      data: {
        product,
        addOnIds: body.addOnIds,
      } as ISelectProductWithAddOnEvent,
    });

    res.status(200).json('Product selected');
  }
}
