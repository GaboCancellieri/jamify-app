import { ReactNode } from "react";
import { TYPOGRAPHY_TYPE_VARIANTS } from "./constants";

export interface TypographyProps {
  type: keyof typeof TYPOGRAPHY_TYPE_VARIANTS;
  children: ReactNode;
  onClick?: () => void;
}
