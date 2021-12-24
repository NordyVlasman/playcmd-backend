import { BaseEntity } from 'src/core/base.entity';
import { IRole } from 'src/interfaces';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'roles' })
export class Role extends BaseEntity implements IRole {
  @Column()
  name: string;
}
