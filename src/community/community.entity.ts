import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';
import { Entity } from 'typeorm';

@Entity({ name: 'communities' })
export class Community extends BaseEntity implements ICommunity {
  title: string;
  slug: string;
  owner?: IUser;
  ownerId: number;
  smallTitle?: string;
  communityAvatar?: string;
  summary?: string;
  createdBy?: IUser;
  createdById: number;
}
