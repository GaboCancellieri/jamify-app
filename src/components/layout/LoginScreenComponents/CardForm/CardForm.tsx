import React, { useState } from "react";
import { Card } from "../../../common";
import styles from "./CardForm.module.scss";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const CardForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleRegister = () => {
    setIsLogin(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className={styles.cardContainer}>
      <Card width="560px" height="450px">
        {isLogin ? (
          <LoginForm onRegister={handleRegister} />
        ) : (
          <RegisterForm onLogin={handleLogin} />
        )}
      </Card>
    </div>
  );
};

export default CardForm;
