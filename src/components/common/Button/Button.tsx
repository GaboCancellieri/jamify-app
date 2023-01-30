import React from "react";
import { ButtonProps } from "./types";
import "./Button.css";

const Button = ({ type, children }: ButtonProps) => {
  return <button className={type}>{children}</button>;
};

export default Button;
