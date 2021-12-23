import { IBaseEntityModel, ICommunity, IUser } from '.';

export interface ICommunityMember extends IBaseEntityModel {
  user?: IUser;
  community?: ICommunity;
}
