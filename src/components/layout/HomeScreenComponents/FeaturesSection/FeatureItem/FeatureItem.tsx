import React from "react";
import styles from "./FeatureItem.module.scss";
import { FeatureItemProps } from "./FeatureItem.types";
import { Typography } from "../../../../common";
import classnames from "classnames";

const FeatureItem = ({ title, image, altText, index }: FeatureItemProps) => {
  const direction = index % 2 === 0 ? "left" : "right";
  return (
    <div className={styles.itemContainer}>
      <div className={classnames(styles.textContainer, styles[direction])}>
        <Typography type={"itemTitle"}>{title}</Typography>
      </div>
      <img
        width="100%"
        style={{ objectFit: "cover" }}
        src={image}
        alt={altText}
      ></img>
    </div>
  );
};

export default FeatureItem;
