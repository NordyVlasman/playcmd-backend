import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './community.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community])],
})
export class CommunityModule {}
