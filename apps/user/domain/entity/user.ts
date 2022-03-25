import { Result } from '@badrap/result';
import { v4 as uuidV4 } from 'uuid';

// TODO: add user props(value-object) interface

// aggregate
export class User {
  private constructor(protected readonly _id, protected readonly props) {}

  get id() {
    return this._id;
  }

  public static create(create): Result<User> {
    const id = uuidV4();
    const props = { ...create };
    const user = new User(id, props);

    // TODO: handle fail
    return Result.ok(user);
  }
}
