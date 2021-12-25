import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';

export class CommunityEntity extends BaseEntity implements ICommunity {
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
