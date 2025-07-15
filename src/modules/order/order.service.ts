import { IProduct } from '@interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders: IProduct[] = [];

  public getOrders(): IProduct[] {
    return this.orders;
  }

  public createOrder(products: IProduct[]): void {
    if (this.orders.length >= 10) {
      this.orders = [];
    }

    products.forEach((p, idx) => {
      if (idx <= 9) this.orders.push(p);
    });
  }
}
