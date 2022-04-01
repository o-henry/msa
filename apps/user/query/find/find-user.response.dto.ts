import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class UserResponse {
  @ApiProperty({ example: '2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231' })
  @Field()
  id!: string;

  @ApiProperty({ example: 'henry', description: 'user name' })
  @Field()
  name!: string;
}
