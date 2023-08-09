import React from "react";
import styles from "./DropdownInput.module.scss";
import { FEATHER_ICONS, ICON_SIZE_SMALL } from "../../../../constants/icon";
import Icon from "../../Icon";
import Button from "../../Button";

interface DropdownInputProps {
  selectedOptionLabel: string;
  placeholder?: string;
  onClick: () => void;
}

const DropdownInput = ({
  selectedOptionLabel,
  placeholder,
  onClick,
}: DropdownInputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputBox}
        type="text"
        value={selectedOptionLabel}
        placeholder={placeholder}
        onClick={onClick}
      />
      <div className={styles.inputIconButton}>
        <Button type={"blank"} onClick={onClick}>
          <Icon
            size={ICON_SIZE_SMALL}
            iconId={"FiChevronsDown"}
            iconDesign={FEATHER_ICONS}
          ></Icon>
        </Button>
      </div>
    </div>
  );
};

export default DropdownInput;
