import { v4 as uuidV4 } from 'uuid';

/**
 * @desc entity
 * entity는 비즈니스 로직이 포함되며 id로 구분된다.
 * setter를 포함하지 않는다. 캡슐화를 지킨다.
 * class는 property 와 method를 모두 갖는다.
 * 엔티티는 in-memory가 아닌 db에 저장된다.
 *
 * Again, encapsulation and data integrity.
 * We want to control how instances of Users get into the execution of our domain layer code.
 *
 * 엔티티는 항상 유효한 데이터어야 한다. 비즈니스 로직에서 항상 참이어야 하는 부분에 대해 불변성을 적용해야한다.
 */

export abstract class Entity<T> {
  protected readonly props: T;

  constructor(protected readonly _id) {
    this._id = uuidV4();
  }

  static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) return false;
    if (this === object) return true;
    if (!Entity.isEntity(object)) return false;
    return this._id.equals(object._id);
  }
}
