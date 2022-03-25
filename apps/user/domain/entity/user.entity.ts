import { Result } from '@badrap/result';
import { v4 as uuidV4 } from 'uuid';
// TODO: migrate to value-object
interface UserProps {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  phone: number;
}

// aggregate
export class User {
  get firstName() {
    return this.props.firstName;
  }

  get lastName() {
    return this.props.name;
  }

  get address() {
    return this.props.address;
  }

  private constructor(protected readonly id, protected readonly props) {}

  public static create(create: UserProps): Result<User> {
    const id = uuidV4();
    const props: UserProps = { ...create };
    const user = new User(id, props);

    // TODO: handle fail
    return Result.ok(user);
  }
}
