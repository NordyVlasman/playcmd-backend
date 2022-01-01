import { IBaseEntityModel, IUser } from '.';
import { IPost } from './post.model';

export interface ICommunity extends IBaseEntityModel {
  title: string;
  slug: string;

  smallTitle?: string;
  communityAvatar?: string;
  summary?: string;

  members?: IUser[];
  posts?: IPost[];
  owner?: IUser;
  createdBy?: IUser;
}
