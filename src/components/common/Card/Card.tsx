import React from "react";
import { CardProps } from "./types";
import styles from "./Card.module.scss";
import classnames from "classnames";

const Card = ({ children, width, height, variant = "dark" }: CardProps) => {
  return (
    <div
      className={classnames(styles.cardContainer, styles[variant])}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default Card;
