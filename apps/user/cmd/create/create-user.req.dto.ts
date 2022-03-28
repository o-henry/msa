import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty({ example: 'henry', description: 'user name' })
  @MinLength(5)
  @IsString()
  readonly name!: string;
}
