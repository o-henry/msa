import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller({ path: 'users', version: '1' })
export class CreateUserController {
  @ApiOperation({ summary: 'create a user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    // description is dto
  })
  @Post()
  async create_user() {
    return;
  }
}
