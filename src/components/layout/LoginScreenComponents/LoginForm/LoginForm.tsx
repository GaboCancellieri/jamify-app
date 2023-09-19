import React, { useEffect, useReducer } from "react";
import { Button, Icon, Input, Line, Typography } from "../../../common";
import styles from "./LoginForm.module.scss";
import { useLoginService } from "../../../../api/api";
import { loginInitialState, loginReducer } from "./context/reducer";
import {
  setLoginEmail,
  setLoginIsLogged,
  setLoginIsSubmitted,
  setLoginPassword,
} from "./context/actions";
import { FLAT_COLOR_ICONS } from "../../../../constants/icon";
import { useNavigate } from "react-router-dom";
import { LoginFormProps } from "./types";
import { UserStateContext } from "../../../../context/UserContext/UserContext";
import { IUserState } from "../../../../context/UserContext/types";
import connect from "../../../../context/Store/connect";

const LoginForm = ({ onRegister, currentUser }: LoginFormProps) => {
  const navigate = useNavigate();
  const loginService = useLoginService();
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState
  );

  console.log({ currentUser });
  const handleEmailChange = (event: any) => {
    loginDispatch(setLoginEmail(event.target.value));
  };

  const handlePasswordChange = (event: any) => {
    loginDispatch(setLoginPassword(event.target.value));
  };

  const handleLogin = async () => {
    try {
      loginDispatch(setLoginIsSubmitted(true));
      const result = await loginService.login(
        loginState.email,
        loginState.password
      );
      console.log(result);
      if (result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken", result.refreshToken);
        loginDispatch(setLoginIsLogged(true));
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (loginState.isLogged) {
      navigate("/feed");
    }
  }, [loginState.isLogged, navigate]);

  return (
    <>
      <div className={styles.inputContainer}>
        <Input
          placeholder={"username"}
          onChange={handleEmailChange}
          value={loginState.email}
        ></Input>
        <Input
          type={"password"}
          placeholder={"password"}
          onChange={handlePasswordChange}
          value={loginState.password}
        ></Input>
      </div>
      <div className={styles.loginButtonContainer}>
        <Button type="secondary" isFullSize onClick={handleLogin}>
          <Typography type="buttonTextSecondary">Login</Typography>
        </Button>
      </div>
      <div className={styles.loginTextContainer}>
        <Typography type="smallTextPrimary">¿Forgot your password?</Typography>
      </div>
      <Line width="526px" height="2px" color="#2C2C2C" />
      <div className={styles.loginButtonContainer}>
        <Button type="primary" isFullSize onClick={onRegister}>
          <Typography type="buttonTextPrimary">Register</Typography>
        </Button>
      </div>
      <div className={styles.loginButtonContainer}>
        <Button type="dark" isFullSize onClick={handleLogin}>
          <div className={styles.googleButtonContent}>
            <Icon
              className={styles.googleIcon}
              iconId="FcGoogle"
              iconDesign={FLAT_COLOR_ICONS}
            ></Icon>
            <Typography type="buttonTextSecondary">
              <span>Login with Google</span>
            </Typography>
          </div>
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = [
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: IUserState) => ({ currentUser }),
  },
];

export default connect({ mapStateToProps })(LoginForm);
