/* eslint-disable prettier/prettier */
import { IBaseEntityModel, IUser } from '.';

export interface IPost extends IBaseEntityModel {
  title?: string;
  slug?: string;

  body?: string;
  
  author?: IUser;
  publishedAt?: Date;
}
