import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  RelationId,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity({ name: 'communities' })
export class Community extends BaseEntity implements ICommunity {
  @Column()
  title: string;

  @Column()
  slug: string;

  @OneToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  owner?: IUser;

  @Column()
  smallTitle?: string;

  @Column()
  communityAvatar?: string;

  @Column()
  summary?: string;

  @ManyToOne(() => User, (user) => user.createdCommunities)
  @JoinColumn()
  createdBy?: IUser;
}
