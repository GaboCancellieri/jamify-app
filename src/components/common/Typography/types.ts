import { ReactNode } from "react";

export interface TypographyProps {
  type: "title" | "paragraph" | "buttonTextWhite" | "buttonTextBlack";
  children: ReactNode;
}
