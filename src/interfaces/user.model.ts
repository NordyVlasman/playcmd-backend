import { IBaseEntityModel, IRole, ISocialLink } from '.';

export interface IUser extends IBaseEntityModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  imageUrl?: string;

  about?: string;
  socialLinks: ISocialLink[];

  role?: IRole;
  roleId?: number;
}
