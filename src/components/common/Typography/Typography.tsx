import React from "react";
import { TypographyProps } from "./types";
import styles from "./Typography.module.scss";

const Typography = ({ type, children }: TypographyProps) => {
  return <div className={styles[type]}>{children}</div>;
};

export default Typography;
