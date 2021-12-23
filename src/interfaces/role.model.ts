import { IBaseEntityModel } from '.';

export enum RolesEnum {
  STUDENT = 'STUDENT',
  LECTURER = 'LECTURER',
  DEVELOPER = 'DEVELOPER',
}

export interface IRole extends IBaseEntityModel {
  name: string;
}
