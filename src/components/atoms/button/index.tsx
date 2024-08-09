import React, { DetailedHTMLProps, ReactNode } from "react";
import "./button-styles.scss";
import clsx from "clsx";

interface IButtonBrops
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  otherClasses?: string;
}
const Button = ({ children, otherClasses, ...props }: IButtonBrops) => {
  return (
    <button className={clsx(otherClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
