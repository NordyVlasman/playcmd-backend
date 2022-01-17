import { ICommand } from '@nestjs/cqrs';
import { IUserRegistrationInput } from 'src/interfaces';

export class AuthRegisterCommand implements ICommand {
  static readonly type = '[AUTH] Register';

  constructor(public readonly input: IUserRegistrationInput) {}
}
