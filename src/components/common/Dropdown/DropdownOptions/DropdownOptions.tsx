import React from "react";
import styles from "./DropdownOptions.module.scss";
import Typography from "../../Typography";
import classnames from "classnames";

interface DropdownOptionsProps {
  options: any[];
  optionLabel?: string | null;
  isVisible: boolean;
  onChange: (option: any) => void;
}

const DropdownOptions = ({
  options,
  optionLabel = null,
  isVisible,
  onChange,
}: DropdownOptionsProps) => {
  if (options.length <= 0) return null;
  return (
    <div
      className={classnames(styles.dropdownOptionsContainer, {
        [styles.visible]: isVisible,
      })}
    >
      {options.map((option) => {
        return (
          <button
            className={styles.itemButton}
            onClick={() => onChange(option)}
          >
            <Typography type={"dropdownText"}>
              {optionLabel ? option[optionLabel] : option}
            </Typography>
          </button>
        );
      })}
    </div>
  );
};

export default DropdownOptions;
