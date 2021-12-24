import { BaseEntity } from 'src/core/base.entity';
import { IRole } from 'src/interfaces';
import { Column } from 'typeorm';

export class Role extends BaseEntity implements IRole {
  @Column()
  name: string;
}
