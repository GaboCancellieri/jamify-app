import React from "react";
import styles from "./LoginScreen.module.scss";
import {
  LoginForm,
  SessionLogin,
} from "../../components/layout/LoginScreenComponents";

const LoginScreen = () => {
  return (
    <div className={styles.loginScreenContainer}>
      <div className={styles.loginScreenContent}>
        <LoginForm />
        <SessionLogin />
      </div>
    </div>
  );
};

export default LoginScreen;
