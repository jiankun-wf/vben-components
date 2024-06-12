export type LoginParams = {
  userName: string;
  password: string;
  device?: string;
};

export interface LoginResultModel {
  userId: string | number;
  token: string;
  roles: RoleInfo[];
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

export type GetUserInfoModel = {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
};
