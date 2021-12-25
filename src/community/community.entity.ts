import { BaseEntity } from 'src/core/base.entity';
import { ICommunity, IUser } from 'src/interfaces';
import { Column, Entity, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity({ name: 'communities' })
export class Community extends BaseEntity implements ICommunity {
  @Column()
  title: string;

  @Column()
  slug: string;

  @OneToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  owner?: IUser;

  @RelationId((it: Community) => it.owner)
  @Column()
  ownerId: number;

  @Column()
  smallTitle?: string;

  @Column()
  communityAvatar?: string;

  @Column()
  summary?: string;

  @OneToOne(() => User, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  createdBy?: IUser;

  @RelationId((it: Community) => it.createdBy)
  @Column()
  createdById: number;
}
