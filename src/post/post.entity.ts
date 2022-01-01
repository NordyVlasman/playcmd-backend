import { Community } from 'src/community/community.entity';
import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';
import { IPost } from 'src/interfaces/post.model';
import { User } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'posts' })
export class Post extends BaseEntity implements IPost {
  @Column()
  title?: string;
  @Column()
  slug?: string;
  @Column()
  body?: string;

  @ManyToOne(() => Community, (community) => community.posts)
  community?: ICommunity;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  author?: IUser;

  @Column({ type: 'date' })
  publishedAt?: Date;
}
