import {
  SET_LOGIN_EMAIL,
  SET_LOGIN_IS_ERROR,
  SET_LOGIN_IS_LOGGED,
  SET_LOGIN_IS_SUBMITTED,
  SET_LOGIN_PASSWORD,
} from "./actions";
import { LoginState } from "./types";

export const loginInitialState: LoginState = {
  email: "",
  password: "",
  isSubmitted: false,
  isError: false,
  isLogged: Boolean(localStorage.getItem("accessToken")),
};

export const loginReducer = (state: LoginState, options: any) => {
  const { action, payload } = options;

  switch (action) {
    case SET_LOGIN_EMAIL:
      return { ...state, email: payload.email };
    case SET_LOGIN_PASSWORD:
      return { ...state, password: payload.password };
    case SET_LOGIN_IS_SUBMITTED:
      return { ...state, isSubmitted: payload.isSubmitted };
    case SET_LOGIN_IS_ERROR:
      return { ...state, isError: payload.isError };
    case SET_LOGIN_IS_LOGGED:
      return { ...state, isLogged: payload.isLogged };
    default:
      return state;
  }
};
