import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserOrmEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  age: number;
}
