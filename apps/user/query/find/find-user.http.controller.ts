import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponse } from 'apps/user/dto/user.response.dto';

@Controller({ path: 'users', version: '1' })
export class FindUserController {
  @Get()
  @ApiOperation({ summary: 'find users' })
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  async find_users(): Promise<UserResponse[]> {
    return;
  }
}
