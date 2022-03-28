import { CommandBus } from '@nestjs/cqrs';

import { CreateUserCommand } from './create-user.cmd';
import { CreateUserRequest } from './create-user.req.dto';

export class CreateUserService {
  constructor(private readonly _commandBus: CommandBus) {}

  async createUser(user: CreateUserRequest) {
    return this._commandBus.execute(new CreateUserCommand(user));
  }
}
