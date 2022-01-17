import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UserController],
  providers: [UserService, ...CommandHandlers],
})
export class UserModule {}
