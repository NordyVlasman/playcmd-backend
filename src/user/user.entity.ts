import { IRole, ISocialLink, IUser } from 'src/interfaces';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
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
