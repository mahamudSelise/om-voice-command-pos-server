import { IApiResponse } from '@interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiResponseService {
  public successResponse<T>(data: T): IApiResponse<T> {
    return {
      data,
      status: 200,
      errors: [],
    };
  }
}
