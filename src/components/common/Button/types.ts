import { ReactNode } from "react";

export interface ButtonProps {
  type: "primary" | "secondary" | "blank" | "dark";
  children: ReactNode;
  onClick: (event?: any) => void;
  isFullSize?: boolean;
}
