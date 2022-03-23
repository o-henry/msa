import { Entity } from './entity';

export abstract class AggregateRoot<T> extends Entity<T> {
  // 도메인 이벤트를 통해 상태변경을 나타낸다.
  // 대부분 이벤트 ID, 타임스탬프 같은 메타데이터가 있다.
  private _domainEvents = [];
}
