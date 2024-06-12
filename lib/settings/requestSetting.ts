import { ErrorMessageMode } from "#/axios";
import { GetUserInfoModel, LoginParams, LoginResultModel } from "#/project";
import { defHttp } from "@/utils/http/axios";

import { getMenus } from "@/mock/menu";

export const requestSettinng = {
  menu: getMenus,

  permissionCode: () =>
    defHttp.get<string[]>({
      url: "/wi-font/web/admin-role/authority-permission-list",
    }),

  logout: () => defHttp.get({ url: "/wi-font/web/admin-user/log-out" }),

  userinfo: () =>
    defHttp.get<GetUserInfoModel>(
      { url: "/wi-font/web/admin-user/user-info" },
      { errorMessageMode: "none" }
    ),

  login: (params: LoginParams, mode: ErrorMessageMode = "modal") =>
    defHttp.post<LoginResultModel>(
      {
        url: "/wi-font/web/admin-user/web-login",
        params,
      },
      {
        errorMessageMode: mode,
      }
    ),
};

export const changeSetting = (Fn) => {
  requestSettinng.menu = Fn;
};

export const REQUEST_TOKEN_KEY = "WI-FONT-AUTHENTICATE";
