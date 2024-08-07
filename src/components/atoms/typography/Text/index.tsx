import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ITextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
  otherClasses?: string;
}
const Text = ({ text, otherClasses, ...props }: ITextProps) => {
  return (
    <p className={otherClasses} {...props}>
      {text}
    </p>
  );
};

export default Text;
