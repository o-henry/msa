import { v4 as uuidV4 } from 'uuid';
import { Result } from '@badrap/result';

// TODO: add user props(value-object) interface

// aggregate
export class User {
  private constructor(
    protected readonly _id: string,
    protected readonly _props: unknown,
  ) {}

  // TODO : implement FK

  get id() {
    return this._id;
  }

  public static create(props: unknown): Result<User> {
    const id = uuidV4();
    const user = new User(id, props);

    if (!user) {
      return Result.err(new Error('failed to create user'));
    }
    return Result.ok(user);
  }
}
