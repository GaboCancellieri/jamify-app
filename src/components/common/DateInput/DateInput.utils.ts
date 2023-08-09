import { INIT_YEAR, MONTHS_NUMBER_DATA } from "./DateInput.constants";

export const getListYears = () => {
  const years = [];
  for (let i = INIT_YEAR; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }
  return years;
};

export const getMonthNumber = (month: keyof typeof MONTHS_NUMBER_DATA) => {
  return MONTHS_NUMBER_DATA[month];
};
