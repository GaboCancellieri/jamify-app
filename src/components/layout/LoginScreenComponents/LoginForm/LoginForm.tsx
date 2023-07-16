import React, { useReducer } from "react";
import { Button, Card, Input, Line, Typography } from "../../../common";
import styles from "./LoginForm.module.scss";
import { useLoginService } from "../../../../api/api";
import { loginInitialState, loginReducer } from "./context/reducer";
import {
  setLoginEmail,
  setLoginIsSubmitted,
  setLoginPassword,
} from "./context/actions";

const LoginForm = () => {
  const loginService = useLoginService();
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState
  );

  const handleEmailChange = (event: any) => {
    loginDispatch(setLoginEmail(event.target.value));
  };

  const handlePasswordChange = (event: any) => {
    loginDispatch(setLoginPassword(event.target.value));
  };

  const handleLogin = () => {
    loginDispatch(setLoginIsSubmitted(true));
    loginService.login(loginState.email, loginState.password);
  };

  return (
    <div className={styles.cardContainer}>
      <Card width="560px" height="420px">
        <div className={styles.cardContent}>
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
        </div>
        <div className={styles.loginButtonContainer}>
          <Button type="secondary" isFullSize onClick={handleLogin}>
            <Typography type="buttonTextSecondary">Login</Typography>
          </Button>
        </div>
        <div className={styles.loginTextContainer}>
          <Typography type="smallTextPrimary">
            ¿Forgot your password?
          </Typography>
        </div>
        <Line width="526px" height="2px" color="#2C2C2C" />
        <div className={styles.loginButtonContainer}>
          <Button type="primary" isFullSize onClick={handleLogin}>
            <Typography type="buttonTextPrimary">Register</Typography>
          </Button>
        </div>
        <div className={styles.loginButtonContainer}>
          <Button type="dark" isFullSize onClick={handleLogin}>
            <Typography type="buttonTextSecondary">
              Enter with Google
            </Typography>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
