import { IUser } from 'src/interfaces';
import { UserService } from 'src/user/user.service';
import { UserCreateCommand } from '..';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UserCreateCommand)
export class UserCreateHandler implements ICommandHandler<UserCreateCommand> {
  constructor(private readonly userService: UserService) {}

  public async execute(command: UserCreateCommand): Promise<IUser> {
    const { input } = command;

    return await this.userService.create(input);
  }
}
