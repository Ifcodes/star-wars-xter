const CharacterCardSkeleton = () => {
  return (
    <div data-testid="skeleton" className="animate-pulse w-full">
      <div className="w-full h-[267px] rounded-md bg-grey1 "></div>
      <div className="h-3 w-[40%] bg-grey1 rounded-lg mt-3"></div>
    </div>
  );
};

export default CharacterCardSkeleton;
