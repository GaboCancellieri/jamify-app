import { ReactNode } from "react";

export interface ButtonProps {
  type: "primary" | "secondary" | "blank";
  children: ReactNode;
  onClick: (event?: any) => void;
}
