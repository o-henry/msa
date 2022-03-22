import { Result } from '@badrap/result';

interface ItemProps {
  quantity: number;
  name: string;
}

export class Item implements ItemProps {
  protected readonly props: ItemProps;

  constructor(props) {}

  public get quantity(): number {
    return this.props.quantity;
  }

  public get name(): string {
    return this.props.name;
  }

  protected validate(props: ItemProps): Result<Item> {
    if (props.quantity < 0) {
      return Result.err(new Error('quantity is out of range'));
    }
    return Result.ok(new Item(props));
  }
}
