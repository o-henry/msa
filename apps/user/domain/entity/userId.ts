import { v4 as uuidV4 } from 'uuid';

export class UserId {
  private constructor(protected readonly _id = uuidV4()) {}

  get id() {
    return this._id;
  }

  public static create(id) {
    return new UserId(id);
  }
}
