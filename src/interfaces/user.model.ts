import { IBaseEntityModel, ICommunity, IRole, ISocialLink } from '.';
import { IPost } from './post.model';

export interface IUser extends IBaseEntityModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  imageUrl?: string;
  hash?: string;
  about?: string;
  socialLinks: ISocialLink[];

  role?: IRole;
  roleId?: number;

  createdCommunities?: ICommunity[];
  ownedCommunities?: ICommunity[];
  joinedCommunities?: ICommunity[];
  posts?: IPost[];
}

export interface IUserCreateInput {
  firstName?: string;
  lastName?: string;
  email?: string;
}
