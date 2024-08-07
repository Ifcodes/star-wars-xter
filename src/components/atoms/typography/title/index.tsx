import React, { DetailedHTMLProps } from "react";
import "./title-styles.scss";
import clsx from "clsx";

interface ITitleProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  text: string;
  variant?: "h1" | "h2";
  otherClasses?: string;
}

const Title = ({
  text,
  variant = "h1",
  otherClasses,
  ...props
}: ITitleProps) => {
  if (variant === "h2")
    return (
      <h2 className={clsx("h2", otherClasses)} {...props}>
        {text}
      </h2>
    );

  return (
    <h1 className={clsx("h1", otherClasses)} {...props}>
      {text}
    </h1>
  );
};

export default Title;
