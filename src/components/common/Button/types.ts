import { ReactNode } from "react";

export interface ButtonProps {
  type: "primary" | "secondary";
  children: ReactNode;
}
