import { ReactNode } from "react";

export interface NavLinkProps {
  to: string;
  title: string;
  children?: ReactNode;
}
