import { ReactNode } from "react";

export interface IProps {
  size: "small" | "medium" | "large";
  type: "primary" | "secondary";
  children?: ReactNode;
  to: string;
}
