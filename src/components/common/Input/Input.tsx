import React from "react";
import classnames from "classnames";
import { InputProps } from "./types";
import styles from "./Input.module.scss";

const Input = ({
  value,
  onChange,
  state = "normal",
  type = "text",
  placeholder = "",
  className = "",
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={classnames(styles.inputBox, className, {
          [styles.onError]: state === "error",
          [styles.onSuccess]: state === "success",
        })}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
