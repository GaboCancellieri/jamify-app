import { RegisterFormState } from "./types";
import * as Actions from "./actions";
import {
  checkIsValidEmail,
  checkIsValidPassword,
} from "../../../../../utils/validators";
import { InputStateType } from "../../../../common/Input/types";

export const registerFormInitialState: RegisterFormState = {
  email: "",
  username: "",
  password: "",
  repeatedPassword: "",
  dob: null,
  isCorrect: false,
  isSubmitted: false,
  isDOBError: false,
  inputStates: {
    emailInputState: "normal",
    usernameInputState: "normal",
    passwordInputState: "normal",
    repeatedPasswordInputState: "normal",
  },
};

export const registerFormReducer = (state: RegisterFormState, options: any) => {
  const { action, payload } = options;
  switch (action) {
    case Actions.SET_REGISTER_EMAIL:
      if (state.isSubmitted) {
        const isValidEmail = checkIsValidEmail(payload.email);
        const emailInputState: InputStateType = !isValidEmail
          ? "error"
          : "success";
        return {
          ...state,
          email: payload.email,
          isCorrect:
            emailInputState === "success" &&
            state.inputStates.passwordInputState === "success" &&
            state.inputStates.repeatedPasswordInputState === "success" &&
            !state.isDOBError,
          inputStates: {
            ...state.inputStates,
            emailInputState,
          },
        };
      } else {
        return {
          ...state,
          email: payload.email,
        };
      }
    case Actions.SET_REGISTER_USERNAME:
      return {
        ...state,
        username: payload.username,
      };
    case Actions.SET_REGISTER_PASSWORD:
      if (state.isSubmitted) {
        const isValidPassword = checkIsValidPassword(payload.password);
        const passwordInputState: InputStateType = !isValidPassword
          ? "error"
          : "success";
        const repeatedPasswordInputState: InputStateType =
          state.repeatedPassword !== payload.password ? "error" : "success";
        return {
          ...state,
          password: payload.password,
          isCorrect:
            state.inputStates.emailInputState === "success" &&
            passwordInputState === "success" &&
            repeatedPasswordInputState === "success" &&
            !state.isDOBError,
          inputStates: {
            ...state.inputStates,
            passwordInputState,
            repeatedPasswordInputState,
          },
        };
      } else {
        return {
          ...state,
          password: payload.password,
        };
      }
    case Actions.SET_REGISTER_REPEATED_PASSWORD:
      if (state.isSubmitted) {
        const repeatedPasswordInputState: InputStateType =
          payload.repeatedPassword !== state.password ? "error" : "success";
        return {
          ...state,
          isCorrect:
            state.inputStates.emailInputState === "success" &&
            state.inputStates.passwordInputState === "success" &&
            repeatedPasswordInputState === "success" &&
            !state.isDOBError,
          repeatedPassword: payload.repeatedPassword,
          inputStates: {
            ...state.inputStates,
            repeatedPasswordInputState,
          },
        };
      } else {
        return {
          ...state,
          repeatedPassword: payload.repeatedPassword,
        };
      }
    case Actions.SET_REGISTER_DOB:
      return {
        ...state,
        dob: payload.dob,
        isDOBError: payload.dob
          ? new Date().getFullYear() - payload.dob.getFullYear() > 100
          : false,
      };
    case Actions.SUBMIT_FORM:
      const isValidEmail = checkIsValidEmail(state.email);
      const emailInputState: InputStateType = !isValidEmail
        ? "error"
        : "success";
      const isValidPassword = checkIsValidPassword(state.password);
      const passwordInputState: InputStateType = !isValidPassword
        ? "error"
        : "success";
      const repeatedPasswordInputState: InputStateType =
        state.repeatedPassword !== state.password ? "error" : "success";
      return {
        ...state,
        isCorrect:
          emailInputState === "success" &&
          passwordInputState === "success" &&
          repeatedPasswordInputState === "success" &&
          !state.isDOBError,
        isSubmitted: true,
        inputStates: {
          ...state.inputStates,
          emailInputState,
          passwordInputState,
          repeatedPasswordInputState,
        },
      };
    case Actions.RESET_REGISTER_FORM:
      return { ...registerFormInitialState };
    default:
      return state;
  }
};
