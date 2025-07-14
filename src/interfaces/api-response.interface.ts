import { HttpStatus } from '@nestjs/common';

export interface IApiResponse<T> {
  data: T;
  status: HttpStatus;
  errors: string[];
}
