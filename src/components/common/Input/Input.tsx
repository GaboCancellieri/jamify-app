import React, { useState } from "react";
import classnames from "classnames";
import { InputProps } from "./types";
import styles from "./Input.module.scss";
import { BOX_ICONS, ICON_SIZE_SMALL } from "../../../constants/icon";
import { Icon, Tooltip } from "..";

const Input = ({
  value,
  onChange,
  state = "normal",
  type = "text",
  placeholder = "",
  className = "",
  errorMessage = "",
  disableCopyEvent = false,
  disablePasteEvent = false,
}: InputProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyEvent = disableCopyEvent
    ? (e: any) => {
        e.preventDefault();
      }
    : () => {};

  const handlePasteEvent = disablePasteEvent
    ? (e: any) => {
        e.preventDefault();
      }
    : () => {};

  const toggleShowTooltip = (show: boolean) => {
    setShowTooltip(show);
  };

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
        onCopy={handleCopyEvent}
        onPaste={handlePasteEvent}
      />
      {state === "error" ? (
        <div
          className={styles.inputIcon}
          onMouseEnter={() => toggleShowTooltip(true)}
          onMouseLeave={() => toggleShowTooltip(false)}
        >
          <Icon
            iconId={"BiSolidErrorCircle"}
            iconDesign={BOX_ICONS}
            color={"lightcoral"}
            size={ICON_SIZE_SMALL}
          ></Icon>
          {errorMessage ? (
            <Tooltip
              message={errorMessage}
              isVisible={showTooltip}
              type={"error"}
            ></Tooltip>
          ) : null}
        </div>
      ) : null}
      {state === "success" ? (
        <div className={styles.inputIcon}>
          <Icon
            iconId={"BiSolidCheckCircle"}
            iconDesign={BOX_ICONS}
            color={"darkseagreen"}
            size={ICON_SIZE_SMALL}
          ></Icon>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
