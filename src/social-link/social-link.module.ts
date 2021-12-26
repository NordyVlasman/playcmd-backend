import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialLink } from './social-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialLink])],
})
export class SocialLinkModule {}
