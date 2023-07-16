import React from "react";
import classnames from "classnames";
import styles from "./Modal.module.scss";
import { ModalProps } from "./types";
import Button from "../Button";
import Typography from "../Typography";

const Modal = ({
  children,
  isActive = false,
  width,
  height,
  onCancel,
}: ModalProps) => {
  return (
    <div
      className={classnames(styles.modalContainer, {
        [styles.isActive]: isActive,
        [styles.isVisible]: isActive,
      })}
    >
      <div className={styles.modalContent} style={{ width, height }}>
        <div className={styles.buttonContainer}>
          <Button type="blank" onClick={() => onCancel()}>
            <Typography type="buttonTextSecondary">X</Typography>
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
