import { Entity } from 'typeorm';
import { Typeorm } from 'apps/lib/infra/db/orm.entity-base';

@Entity('user')
export class UserEntity extends Typeorm {
  constructor(props?: UserEntity) {
    super(props);
  }
}
