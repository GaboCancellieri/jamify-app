import { InputStateType } from "../../../../common/Input/types";

export interface RegisterFormState {
  email: string;
  username: string;
  password: string;
  repeatedPassword: string;
  dob: Date | null;
  isCorrect: boolean;
  isSubmitted: boolean;
  isDOBError: boolean;
  inputStates: {
    emailInputState: InputStateType;
    usernameInputState: InputStateType;
    passwordInputState: InputStateType;
    repeatedPasswordInputState: InputStateType;
  };
}
