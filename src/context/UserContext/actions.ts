import { IUser } from "./types";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (
  user: IUser,
  accesstoken: string,
  refreshToken: string
) => ({
  action: LOGIN_USER,
  payload: { user, accesstoken, refreshToken },
});

export const logoutUser = () => ({
  action: LOGOUT_USER,
});
