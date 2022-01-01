import { IBaseEntityModel } from '.';

export interface IPost extends IBaseEntityModel {
  title?: string;
  slug?: string;

  publishedAt?: Date;
}
