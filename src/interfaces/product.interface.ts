import { IAddOn } from '@interfaces';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  img: {
    src: string;
  };
  addOns: IAddOn[];
}
