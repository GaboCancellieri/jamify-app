import React, { useReducer } from "react";
import styles from "./RegisterForm.module.scss";
import {
  GAME_ICONS,
  ICON_SIZE_SMALL,
  ICO_MOON,
} from "../../../../constants/icon";
import { Button, DateInput, Icon, Input, Typography } from "../../../common";
import { RegisterFormProps } from "./types";
import { COLOR_ALMOST_BLACK } from "../../../../constants/colors";
import {
  registerFormInitialState,
  registerFormReducer,
} from "./context/reducer";
import {
  resetRegisterForm,
  setRegisterDOB,
  setRegisterEmail,
  setRegisterPassword,
  setRegisterRepeatedPassword,
  setRegisterUsername,
  submitForm,
} from "./context/actions";
import {
  REGISTER_EMAIL_ERROR_MESSAGE,
  REGISTER_PASSWORD_ERROR_MESSAGE,
  REGISTER_REPEATED_PASSWORD_ERROR_MESSAGE,
} from "./constants";

const RegisterForm = ({ onLogin }: RegisterFormProps) => {
  const [registerState, registerDispatch] = useReducer(
    registerFormReducer,
    registerFormInitialState
  );

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch(setRegisterEmail(event.target?.value));
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch(setRegisterUsername(event.target?.value));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    registerDispatch(setRegisterPassword(event.target?.value));
  };

  const handleRepeatedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    registerDispatch(setRegisterRepeatedPassword(event.target?.value));
  };

  const handleDOBChange = (date: Date) => {
    registerDispatch(setRegisterDOB(date));
  };

  const handleCloseRegister = () => {
    registerDispatch(resetRegisterForm());
    onLogin();
  };

  const handleRegister = () => {
    registerDispatch(submitForm());
    if (registerState.isCorrect) {
      // LLAMAMOS A LA API CON:
      console.log({
        email: registerState.email,
        username: registerState.username,
        password: registerState.password,
        repeatedPassword: registerState.repeatedPassword,
        DOB: registerState.dob,
      });
    }
  };

  return (
    <div className={styles.registerFormContainer}>
      <div className={styles.inputContainer}>
        <Input
          placeholder={"email"}
          onChange={handleEmailChange}
          value={registerState.email}
          state={registerState.inputStates.emailInputState}
          errorMessage={REGISTER_EMAIL_ERROR_MESSAGE}
        ></Input>
        <Input
          placeholder={"username"}
          onChange={handleUsernameChange}
          value={registerState.username}
          state={registerState.inputStates.usernameInputState}
          errorMessage={"Username is taken."}
        ></Input>
        <Input
          type={"password"}
          placeholder={"password"}
          onChange={handlePasswordChange}
          value={registerState.password}
          state={registerState.inputStates.passwordInputState}
          errorMessage={REGISTER_PASSWORD_ERROR_MESSAGE}
          disableCopyEvent
          disablePasteEvent
        ></Input>
        <Input
          type={"password"}
          placeholder={"confirm password"}
          onChange={handleRepeatedPasswordChange}
          value={registerState.repeatedPassword}
          state={registerState.inputStates.repeatedPasswordInputState}
          errorMessage={REGISTER_REPEATED_PASSWORD_ERROR_MESSAGE}
          disableCopyEvent
          disablePasteEvent
        ></Input>
        <Typography type={"dropdownText"}>Date of Birth:</Typography>
        <DateInput onChange={handleDOBChange} />
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.cancelButton}>
          <Button type={"danger"} isFullSize onClick={handleCloseRegister}>
            <Icon
              iconId="ImCross"
              iconDesign={ICO_MOON}
              color={COLOR_ALMOST_BLACK}
              size={ICON_SIZE_SMALL}
            ></Icon>
          </Button>
        </div>
        <div className={styles.submittButton}>
          <Button
            type={"primary"}
            isFullSize
            isPulseButton
            onClick={handleRegister}
            disabled={
              !registerState.email ||
              !registerState.username ||
              !registerState.password ||
              !registerState.repeatedPassword ||
              !registerState.dob ||
              registerState.isDOBError ||
              (registerState.isSubmitted && !registerState.isCorrect)
            }
          >
            <Icon
              iconId="GiMusicSpell"
              iconDesign={GAME_ICONS}
              color={COLOR_ALMOST_BLACK}
              size={ICON_SIZE_SMALL}
            ></Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
