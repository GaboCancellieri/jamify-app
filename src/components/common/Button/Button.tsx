import React from "react";
import { ButtonProps } from "./types";
import styles from "./Button.module.scss";
import classnames from "classnames";

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, styles[type])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
