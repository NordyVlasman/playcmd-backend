/* eslint-disable prettier/prettier */
import { IBaseEntityModel, ICommunity, IUser } from '.';

export interface IPost extends IBaseEntityModel {
  title?: string;
  slug?: string;

  body?: string;
  
  author?: IUser;
  publishedAt?: Date;

  community?: ICommunity;
}
