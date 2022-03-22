import { Result } from '@badrap/result';
import { v4 as uuidV4 } from 'uuid';
import { Item } from '../vo/item.vo';

interface OrderProps {
  userId: UserId;
  item: Item;
}

/**
 * Order aggregate를 정의한다.
 * user 가 주문을 하면 order 엔티티를 통해서 주문을 생성
 */
export class Order {
  public get item(): Item {
    return this.props.item;
  }

  public get userId(): UserId {
    return this.props.userId;
  }

  protected readonly id;
  protected readonly props;

  constructor(props, id) {
    this.id = id;
    this.props = props;
  }

  public static create(create: OrderProps): Result<Order> {
    // 개별 주문을 구별할 수 있도록 id를 생성한다.
    const id = uuidV4();
    const props: OrderProps = { ...create };
    const order = new Order(id, props);

    // TODO: handle fail

    return Result.ok(order);
  }
}
