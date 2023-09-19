import jwtDecode from "jwt-decode";
import { IUser } from "../context/UserContext/types";

export const getUserFromAccessToken = (
  accessToken: string | null
): IUser | null => {
  return !accessToken ? null : jwtDecode(accessToken);
};
