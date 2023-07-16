import React from "react";
import { Typography } from "../../../common";
import styles from "./SessionLogin.module.scss";

const SessionLogin = () => {
  return (
    <div className={styles.sesionContainer}>
      <Typography type="logo">Sonarly</Typography>
      <Typography type="titleWhite">Recent Logins</Typography>
      <Typography type="subtitleWhite">
        Click your picture or add an account.
      </Typography>
    </div>
  );
};

export default SessionLogin;
