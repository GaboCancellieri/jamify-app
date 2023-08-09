import React from "react";
import { TypographyProps } from "./types";
import styles from "./Typography.module.scss";

const Typography = ({
  type,
  children,
  onClick = () => undefined,
}: TypographyProps) => {
  return (
    <div className={styles[type]} onClick={onClick}>
      {children}
    </div>
  );
};

export default Typography;
