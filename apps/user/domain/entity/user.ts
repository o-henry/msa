import { v4 as uuidV4 } from 'uuid';
import { Result } from '@badrap/result';
import { Name } from '../vo/name.vo';

// TODO: add user props(value-object) interface
interface Props {
  name: Name;
}

// aggregate
export class User {
  private constructor(
    protected readonly _id: string,
    protected readonly _props: Props,
  ) {}

  // TODO : implement FK(Order)

  get id() {
    return this._id;
  }

  get name(): Name {
    return this._props.name;
  }

  public static create(props: Props): Result<User> {
    const id = uuidV4();
    const user = new User(id, props);

    if (!user) {
      return Result.err(new Error('failed to create user'));
    }
    return Result.ok(user);
  }
}
