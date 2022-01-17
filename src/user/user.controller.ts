import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/core/crud/crud.controller';
import { IUser, IUserCreateInput } from 'src/interfaces';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CommandBus } from '@nestjs/cqrs';
import { UserCreateCommand } from './commands';

@ApiTags('User')
@Controller('user')
export class UserController extends CrudController<User> {
  constructor(
    private readonly userService: UserService,
    private readonly commandBus: CommandBus,
  ) {
    super(userService);
  }

  @ApiOperation({ summary: 'Create new record' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() entity: IUserCreateInput): Promise<IUser> {
    return await this.commandBus.execute(new UserCreateCommand(entity));
  }
}
