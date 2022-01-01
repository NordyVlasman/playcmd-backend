import { IBaseEntityModel, ICommunity, IRole, ISocialLink } from '.';
import { IPost } from './post.model';

export interface IUser extends IBaseEntityModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  imageUrl?: string;
  password?: string;
  about?: string;
  socialLinks: ISocialLink[];

  role?: IRole;
  roleId?: number;

  createdCommunities?: ICommunity[];
  ownedCommunities?: ICommunity[];
  joinedCommunities?: ICommunity[];
  posts?: IPost[];
}
