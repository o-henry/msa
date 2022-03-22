import { Column, Entity } from 'typeorm';

@Entity('order')
export class OrderOrmEntity {
  constructor() {}

  @Column()
  quantity: number;

  @Column()
  name: string;
}
