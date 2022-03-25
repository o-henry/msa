import { Column, Entity } from 'typeorm';
import { Typeorm } from 'apps/lib/infra/db/orm.entity-base';

@Entity('user')
export class UserOrmEntity extends Typeorm {
  constructor(props?: UserOrmEntity) {
    super(props);
  }

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  age: number;
}
