import React, { useState } from "react";
import { Button, Input, Modal, Typography } from "..";
import styles from "./LoginModal.module.scss";
import { LoginModalProps } from "./types";
import { useLoginService } from "../../../api/api";

const LoginModal = ({ onCancel, isActive = false }: LoginModalProps) => {
  const loginService = useLoginService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    loginService.login(email, password);
  };

  return (
    <Modal
      isActive={isActive}
      width={"500px"}
      height={"fit-content"}
      onCancel={onCancel}
    >
      <div className={styles.loginModalContainer}>
        <div className={styles.logoContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Commons-logo.gif?20120119213415"
            alt="Lego Logo"
            width={"100px"}
            height={"100px"}
          />
        </div>
        <div className={styles.inputContainer}>
          <Input
            placeholder={"email"}
            onChange={handleEmailChange}
            value={email}
          ></Input>
          <Input
            type={"password"}
            placeholder={"contraseña"}
            onChange={handlePasswordChange}
            value={password}
          ></Input>
        </div>
        <div className={styles.loginButtonContainer}>
          <Button type="primary" onClick={handleLogin}>
            <Typography type="buttonTextPrimary">Iniciar Sesion</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
