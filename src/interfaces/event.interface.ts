import { IProduct } from './product.interface';

export interface IEvent {
  id: string;
  event:
  | 'CREATE_ORDER'
  | 'ADD_TO_CART'
  | 'CLEAR_CART'
  | 'SELECT_PRODUCT'
  | 'SELECT_ADDON'
  | 'REQUEST_ORDER';
  data: unknown;
}

export interface ISelectProductEvent {
  product: IProduct;
}

export interface ISelectProductWithAddOnEvent {
  product: IProduct;
  addOnIds: string[];
}
