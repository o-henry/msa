import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuidV4 } from 'uuid';

export class OrderEntity extends AggregateRoot {
  static create() {
    const id = uuidV4();
  }
}
