import React, { useState } from "react";
import styles from "./DateInput.module.scss";
import { getListYears, getMonthNumber } from "./DateInput.utils";
import Dropdown from "../Dropdown";
import {
  MONTHS_DATA,
  MONTHS_NUMBER_DATA,
  MONTH_DAYS_DATA,
} from "./DateInput.constants";

interface DateInputProps {
  onChange: (date: Date) => void;
}

const DateInput = ({ onChange }: DateInputProps) => {
  const [selectedYear, setSelectedYear] = useState<number>(1900);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const years = getListYears();

  const handleDateChange = (year: number, month: number, day: number) => {
    const newDate = new Date(year, month, day);
    onChange(newDate);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    handleDateChange(year, selectedMonth, selectedDay);
  };

  const handleMonthChange = (month: string) => {
    const monthNumber = getMonthNumber(
      month.toLowerCase() as keyof typeof MONTHS_NUMBER_DATA
    );
    setSelectedMonth(monthNumber);
    handleDateChange(selectedYear, monthNumber, selectedDay);
  };

  const handleDayChange = (day: number) => {
    setSelectedDay(day);
    handleDateChange(selectedYear, selectedMonth, day);
  };

  return (
    <div className={styles.dateInputContainer}>
      <Dropdown
        options={MONTH_DAYS_DATA[selectedMonth]}
        placeholder={"Select a Day"}
        onChange={handleDayChange}
      />
      <Dropdown
        options={MONTHS_DATA}
        placeholder={"Select a Month"}
        onChange={handleMonthChange}
      />
      <Dropdown
        options={years}
        placeholder={"Select a Year"}
        onChange={handleYearChange}
      />
    </div>
  );
};

export default DateInput;
