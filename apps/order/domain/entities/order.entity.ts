import { Result } from '@badrap/result';
import { v4 as uuidV4 } from 'uuid';

import { Item } from '../../vo/item.vo';
import { order_state } from './order.type';

interface OrderProps {
  item: Item;
  // userId: UserId;
}

/**
 * @desc: Order aggregate root
 * 비즈니스 로직을 정의한다.
 * user 가 주문을 하면 order 엔티티를 통해서 주문을 생성.
 * 트랜잭션을 수행하는데 사용하는 도메인 객체.
 */

// TODO: ADD VALIDATION
export class Order {
  public get item(): Item {
    return this.props.item;
  }

  // TODO: FK
  // public get userId(): UserId {
  //   return this.props.userId;
  // }

  protected readonly id;
  protected readonly props;
  private state: order_state = order_state.APPROVAL_PENDING;

  // 'constructor private' it forces you to use the 'create' Factory method.
  private constructor(props, id) {
    this.id = id;
    this.props = props;
  }

  public static create(create: OrderProps): Result<Order> {
    const id = uuidV4();
    const props: OrderProps = { ...create };
    const order = new Order(id, props);

    // TODO: handle fail
    return Result.ok(order);
  }

  // TODO: connect to saga
  public approved() {
    if (this.state === order_state.APPROVAL_PENDING) {
      this.state = order_state.APPROVED;
      // TODO: authorized order
    }
  }
}
