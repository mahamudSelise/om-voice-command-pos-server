import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { ApiResponseService } from './services/api-response/api-response.service';
import { EventsGateway } from './gateways/events/events.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [ApiResponseService, EventsGateway],
})
export class AppModule { }
