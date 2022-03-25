import { Column, Entity } from 'typeorm';

@Entity('order')
export class OrderOrmEntity {
  @Column()
  quantity: number;

  @Column()
  name: string;
}
