import FetchErrorComponent from "../../atoms/fetch-error-component";
import CharacterCardSkeleton from "../../atoms/skeletons/character-card-skeleton";

interface ILoadingPageProps {
  isLoading: boolean;
  error?: string;
  count: number;
}
const Loading = ({ isLoading, error, count }: ILoadingPageProps) => {
  if (isLoading) {
    return (
      <div
        data-testid="skeletons"
        className="w-full grid grid-cols-3 mt-8 gap-x-4 gap-y-8"
      >
        {Array(count)
          .fill("")
          .map((_val, index) => (
            <CharacterCardSkeleton key={`loading-key-${index}`} />
          ))}
      </div>
    );
  }

  if (error) {
    return <FetchErrorComponent error={error} ctaText="Try Again!" />;
  }

  return null;
};

export default Loading;
