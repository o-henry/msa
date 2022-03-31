/**
 * @desc
 * service는 비즈니스 로직의 진입점이다.
 */

import { Result } from '@badrap/result';
import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'apps/order/db/order.repository';

import { Order, OrderProps } from '../entity/order';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  // TODO: create order domain event
  public create(props: OrderProps): Result<Order> {
    const order = Order.create({ ...props });
    this.orderRepository.save(order);
    return order;
  }
}
