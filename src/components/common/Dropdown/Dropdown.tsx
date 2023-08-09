import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import DropdownInput from "./DropdownInput";
import DropdownOptions from "./DropdownOptions";

interface DropdownProps {
  options: any[];
  placeholder?: string;
  optionLabel?: string;
  onChange: (option: any) => void;
}

const Dropdown = ({
  options,
  placeholder,
  optionLabel,
  onChange,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isShowOptions, setIsShowOptions] = useState(false);

  const toggleShowOptions = () => {
    setIsShowOptions(!isShowOptions);
  };

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
    onChange(option);
    setIsShowOptions(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <DropdownInput
        placeholder={placeholder}
        selectedOptionLabel={
          selectedOption
            ? optionLabel
              ? selectedOption[optionLabel]
              : selectedOption
            : null
        }
        onClick={toggleShowOptions}
      />
      <DropdownOptions
        isVisible={isShowOptions}
        options={options}
        optionLabel={optionLabel}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default Dropdown;
