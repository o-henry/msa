/**
 * @desc
 * service는 비즈니스 로직의 진입점이다.
 */

import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor() {}

  // TODO: create order domain event
  public create(): Order {
    const order = Order.create();
    return order;
  }
}
