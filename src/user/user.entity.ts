import { IsOptional } from 'class-validator';
import { IRole, ISocialLink, IUser } from 'src/interfaces';
import { Role } from 'src/role/role.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  RelationId,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  imageUrl?: string;

  @Column({ nullable: true })
  about?: string;

  //   @OneToMany(() =>)
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
}
