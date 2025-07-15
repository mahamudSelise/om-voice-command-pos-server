import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { ApiResponseService } from './services/api-response/api-response.service';
import { EventsGateway } from './gateways/events/events.gateway';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
    CartModule,
    OrderModule,
  ],
  controllers: [],
  providers: [ApiResponseService, EventsGateway],
})
export class AppModule { }
