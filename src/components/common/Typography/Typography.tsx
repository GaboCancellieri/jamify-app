import React from "react";
import { TypographyProps } from "./types";
import "./Typography.css";

const Typography = ({ type, children }: TypographyProps) => {
  return <div className={type}>{children}</div>;
};

export default Typography;
