/* eslint-disable @typescript-eslint/no-explicit-any */
import Title from "../typography/title";
import Button from "../button";

interface IFetchErrorDisplayProps {
  error: any;
  ctaText?: string;
  handleCta?: () => void;
}

const FetchErrorComponent = ({
  error,
  ctaText,
  handleCta,
}: IFetchErrorDisplayProps) => {
  console.log({ error });
  return (
    <article
      data-testid="error"
      className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center"
    >
      <Title
        otherClasses="mb-4"
        text="Opps! Something went wrong."
        variant="h2"
      />
      <Button onClick={handleCta}>{ctaText}</Button>
    </article>
  );
};

export default FetchErrorComponent;
