import React from "react";
import { ButtonProps } from "./types";
import styles from "./Button.module.scss";
import classnames from "classnames";

const Button = ({
  type,
  children,
  onClick,
  isFullSize = false,
}: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, styles[type], {
        [styles.full]: isFullSize,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
