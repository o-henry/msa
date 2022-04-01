import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'apps/user/domain/entity/user';

@ObjectType({ description: 'user find response' })
export class UserResponse {
  @ApiProperty({ example: '2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231' })
  @Field((type) => ID)
  id!: string;

  @ApiProperty({ example: 'henry', description: 'user name' })
  @Field({ nullable: true })
  name!: string;
}
