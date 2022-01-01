import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { Post } from 'src/post/post.entity';
import { IPost } from 'src/interfaces/post.model';
import { IsOptional } from 'class-validator';

@Entity({ name: 'communities' })
export class Community extends BaseEntity implements ICommunity {
  @Column()
  title: string;

  @Column()
  slug: string;

  @ManyToOne(() => User, (user) => user.ownedCommunities)
  @JoinColumn()
  owner?: IUser;

  @Column()
  @IsOptional()
  smallTitle?: string;

  @Column()
  communityAvatar?: string;

  @Column()
  @IsOptional()
  summary?: string;

  @ManyToMany(() => User, (user) => user.joinedCommunities)
  @JoinTable({
    name: 'community_members',
  })
  members: IUser[];

  @OneToMany(() => Post, (post) => post.community)
  posts?: IPost[];

  @ManyToOne(() => User, (user) => user.createdCommunities)
  @JoinColumn()
  createdBy?: IUser;
}
