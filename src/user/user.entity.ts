import { IRole, ISocialLink, IUser } from 'src/interfaces';
import { BaseEntity, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  imageUrl?: string;
  about?: string;
  socialLinks: ISocialLink[];
  role?: IRole;
  roleId?: number;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
