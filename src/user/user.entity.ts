import { IsEmail, IsOptional } from 'class-validator';
import { BaseEntity } from 'src/core/base.entity';
import { IRole, ISocialLink, IUser } from 'src/interfaces';
import { Role } from 'src/role/role.entity';
import { SocialLink } from 'src/social-link/social-link.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';
import * as argon2 from 'argon2';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  imageUrl?: string;

  @Column({ nullable: true })
  about?: string;

  @OneToMany(() => SocialLink, (socialLink) => socialLink.user)
  @JoinTable()
  socialLinks: ISocialLink[];

  @OneToOne(() => Role, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  role?: IRole;

  @RelationId((it: User) => it.role)
  @IsOptional()
  @Index()
  @Column({ nullable: true })
  roleId?: number;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }
}
