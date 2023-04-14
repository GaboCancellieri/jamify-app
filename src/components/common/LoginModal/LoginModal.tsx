import React, { useState } from "react";
import { Button, Input, Modal, Typography } from "..";
import "./LoginModal.css";
import { LoginModalProps } from "./types";

const LoginModal = ({ onCancel, isActive = false }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("VOY A INICIAR SESION!");
    console.log({ email, password });
  };

  return (
    <Modal
      isActive={isActive}
      width={"500px"}
      height={"fit-content"}
      onCancel={onCancel}
    >
      <div className={"loginModalContainer"}>
        <div className={"logoContainer"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
            alt="Lego Logo"
            width={"100px"}
            height={"100px"}
          />
        </div>
        <div className={"inputContainer"}>
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
        <div className={"loginButtonContainer"}>
          <Button type="primary" onClick={handleLogin}>
            <Typography type="buttonTextWhite">Iniciar Sesion</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
