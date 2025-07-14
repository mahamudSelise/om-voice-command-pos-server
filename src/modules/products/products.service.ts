import { IProduct } from '@interfaces';
import { Injectable } from '@nestjs/common';
import { products } from '../../data/products';

@Injectable()
export class ProductsService {
  public getAllProducts(): IProduct[] {
    return products;
  }

  public getProductById(id: string): IProduct | null {
    return products.find((product) => product.id === id) || null;
  }
}
