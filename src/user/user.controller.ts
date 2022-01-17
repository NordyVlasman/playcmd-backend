import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/core/crud/crud.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController extends CrudController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
