import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ApiResponseService } from 'src/services/api-response/api-response.service';
import { EventsGateway } from 'src/gateways/events/events.gateway';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ApiResponseService, EventsGateway],
})
export class ProductsModule { }
