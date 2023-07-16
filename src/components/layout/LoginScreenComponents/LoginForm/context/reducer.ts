import {
  SET_LOGIN_EMAIL,
  SET_LOGIN_IS_ERROR,
  SET_LOGIN_IS_SUBMITTED,
  SET_LOGIN_PASSWORD,
} from "./actions";
import { LoginState } from "./types";

export const loginInitialState: LoginState = {
  email: "",
  password: "",
  isSubmitted: false,
  isError: false,
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
    default:
      return state;
  }
};
