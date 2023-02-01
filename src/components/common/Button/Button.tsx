import React from "react";
import { ButtonProps } from "./types";
import "./Button.css";
import classnames from "classnames";

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button className={classnames("button", type)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
