import React from "react";
import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./types";
import classnames from "classnames";

const Tooltip = ({ message, isVisible, type }: TooltipProps) => {
  return (
    <div
      className={classnames(styles.tooltipContainer, styles[type], {
        [styles.visible]: isVisible,
      })}
    >
      {message}
    </div>
  );
};

export default Tooltip;
