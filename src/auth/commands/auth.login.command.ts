import { ICommand } from '@nestjs/cqrs';
import { IUserLoginInput } from 'src/interfaces';

export class AuthLoginCommand implements ICommand {
  static readonly type = '[AUTH] Register';

  constructor(public readonly input: IUserLoginInput) {}
}
