import React, { DetailedHTMLProps, ReactNode } from "react";
import "./button-styles.scss";

interface IButtonBrops
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
const Button = ({ children, ...props }: IButtonBrops) => {
  return <button {...props}>{children}</button>;
};

export default Button;
