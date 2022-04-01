import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponse } from 'apps/user/query/find/find-user.response.dto';

@Controller({ path: 'users', version: '1' })
export class FindUserController {
  @ApiOperation({ summary: 'find users' })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  @Get()
  async findUsers(): Promise<UserResponse[]> {
    return;
  }
}
