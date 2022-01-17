import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IRole, ISocialLink, IUser } from 'src/interfaces';
import { Role } from 'src/role/role.entity';
import { SocialLink } from 'src/social-link/social-link.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';
import { Community } from 'src/community/community.entity';
import { Post } from 'src/post/post.entity';
import { IPost } from 'src/interfaces/post.model';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @ApiPropertyOptional({ type: () => String })
  @IsString()
  @Index()
  @Column({ nullable: true })
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({ type: () => String })
  @IsString()
  @Index()
  @Column({ nullable: true })
  @IsOptional()
  lastName?: string;

  @ApiProperty({ type: () => String, minLength: 3, maxLength: 100 })
  @IsNotEmpty()
  @Index({ unique: false })
  @IsOptional()
  @Column({ nullable: true })
  @IsEmail()
  email?: string;

	@ApiProperty({ type: () => String })
	@IsString()
	@Column()
	@IsOptional()
	@Exclude()
	@Column({ nullable: true })
  hash?: string;

	@ApiPropertyOptional({ type: () => String, maxLength: 500 })
	@IsOptional()
	@Column({ length: 500, nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  @IsOptional()
  about?: string;

  @OneToMany(() => SocialLink, (socialLink) => socialLink.user)
  @JoinTable()
  socialLinks: ISocialLink[];

  @OneToMany(() => Post, (post) => post.author)
  posts?: IPost[];

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

  @ManyToMany(() => Community, (community) => community.members)
  joinedCommunities?: ICommunity[];

  @OneToMany(() => Community, (community) => community.owner)
  ownedCommunities?: ICommunity[];

  @OneToMany(() => Community, (community) => community.createdBy)
  createdCommunities?: ICommunity[];
}
