import React from "react";
import classnames from "classnames";
import { InputProps } from "./types";
import "./Input.css";

const Input = ({
  value,
  onChange,
  state = "normal",
  type = "text",
  placeholder = "",
  className = "",
}: InputProps) => {
  return (
    <div className={"inputContainer"}>
      <input
        className={classnames("inputBox", className, {
          ["onError"]: state === "error",
          ["onSuccess"]: state === "success",
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
