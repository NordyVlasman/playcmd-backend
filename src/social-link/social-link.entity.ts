import { BaseEntity } from 'src/core/base.entity';
import { ISocialLink } from 'src/interfaces';
import { User } from 'src/user/user.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'social-links' })
export class SocialLink extends BaseEntity implements ISocialLink {
  @ManyToOne(() => User, (user) => user.socialLinks)
  user: User;
}
