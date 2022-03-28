import { ICommand } from '@nestjs/cqrs';
import { CreateUserRequest } from './create-user.req.dto';

export class CreateUserCommand implements ICommand {
  constructor(private readonly createUserRequest: CreateUserRequest) {}
}
