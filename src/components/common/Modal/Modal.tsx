import React from "react";
import classnames from "classnames";
import "./Modal.css";
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
      className={classnames("modalContainer", {
        ["isActive"]: isActive,
        ["isVisible"]: isActive,
      })}
    >
      <div className={"modalContent"} style={{ width, height }}>
        <div className={"buttonContainer"}>
          <Button type="blank" onClick={() => onCancel()}>
            <Typography type="buttonTextBlack">X</Typography>
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
