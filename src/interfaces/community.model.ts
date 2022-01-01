import { IBaseEntityModel, IUser } from '.';

export interface ICommunity extends IBaseEntityModel {
  title: string;
  slug: string;

  smallTitle?: string;
  communityAvatar?: string;
  summary?: string;

  members: IUser[];

  owner?: IUser;
  createdBy?: IUser;
}
