import { ReactNode } from "react";
import { BUTTON_TYPE_VARIANTS } from "./constants";

export interface ButtonProps {
  type: keyof typeof BUTTON_TYPE_VARIANTS;
  children: ReactNode;
  onClick: (event?: any) => void;
  isFullSize?: boolean;
  isPulseButton?: boolean;
  disabled?: boolean;
}
