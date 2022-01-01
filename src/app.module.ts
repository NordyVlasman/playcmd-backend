import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { RoleModule } from './role/role.module';
import { SocialLinkModule } from './social-link/social-link.module';
import { AuthService } from './auth/auth.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    CommunityModule,
    RoleModule,
    SocialLinkModule,
    PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'playcmd',
      password: 'playcmd',
      database: 'playcmd',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
