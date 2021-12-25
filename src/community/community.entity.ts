import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'communities' })
export class Community extends BaseEntity implements ICommunity {
  @Column()
  title: string;

  @Column()
  slug: string;

  owner?: IUser;

  @Column()
  ownerId: number;

  @Column()
  smallTitle?: string;

  @Column()
  communityAvatar?: string;

  @Column()
  summary?: string;

  createdBy?: IUser;

  @Column()
  createdById: number;
}
