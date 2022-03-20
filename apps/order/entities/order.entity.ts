import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuidV4 } from 'uuid';

export class Order extends AggregateRoot {
  // user 가 주문을 하면 order 엔티티를 통해서 주문을 생성
  static create(props) {
    const id = uuidV4();
  }
}
