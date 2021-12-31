import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { RoleModule } from './role/role.module';
import { SocialLinkModule } from './social-link/social-link.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UserModule, CommunityModule, RoleModule, SocialLinkModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
