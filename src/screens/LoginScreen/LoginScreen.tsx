import React, { useEffect } from "react";
import styles from "./LoginScreen.module.scss";
import {
  CardForm,
  SessionLogin,
} from "../../components/layout/LoginScreenComponents";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/feed");
    }
  }, [navigate]);

  if (localStorage.getItem("accessToken")) return null;

  return (
    <div className={styles.loginScreenContainer}>
      <div className={styles.loginScreenContent}>
        <CardForm />
        <SessionLogin />
      </div>
    </div>
  );
};

export default LoginScreen;
