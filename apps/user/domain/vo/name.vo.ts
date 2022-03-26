import { Result } from '@badrap/result';

interface Props {
  name: string;
}

export class Name {
  private constructor(private readonly props: Props) {}

  get value(): string {
    return this.props.name;
  }

  protected validate(props: Props) {
    if (props.name.length < 0) {
      return Result.err(new Error('name has incorrect format'));
    }
  }
}
