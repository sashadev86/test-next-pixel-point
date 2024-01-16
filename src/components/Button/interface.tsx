import { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  classes: string;
  children?: ReactNode;
  disabled?: boolean;
}