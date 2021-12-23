import { IBaseEntityModel, IUser } from '.';

export interface ICommunity extends IBaseEntityModel {
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
