import { BaseEntity } from 'src/core/base.entity';
import { ISocialLink } from 'src/interfaces';
import { Entity } from 'typeorm';

@Entity({ name: 'social-links' })
export class SocialLink extends BaseEntity implements ISocialLink {}
