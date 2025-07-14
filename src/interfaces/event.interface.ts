import { IProduct } from './product.interface';

export interface IEvent {
  id: string;
  event: 'SELECT_PRODUCT' | 'SELECT_ADDON';
  data: any;
}

export interface ISelectProductEvent {
  product: IProduct;
}

export interface ISelectProductWithAddOnEvent {
  product: IProduct;
  addOnIds: string[];
}
