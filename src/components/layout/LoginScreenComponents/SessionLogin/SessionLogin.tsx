import React from "react";
import { Typography } from "../../../common";
import styles from "./SessionLogin.module.scss";
import { useNavigate } from "react-router-dom";

const SessionLogin = () => {
  const navigate = useNavigate();

  const handleLogoRedirect = () => {
    navigate("/");
  };

  return (
    <div className={styles.sesionContainer}>
      <Typography type="logo" onClick={handleLogoRedirect}>
        Sonarly
      </Typography>
      <Typography type="titleWhite">Recent Logins</Typography>
      <Typography type="subtitleWhite">
        Click your picture or add an account.
      </Typography>
    </div>
  );
};

export default SessionLogin;
