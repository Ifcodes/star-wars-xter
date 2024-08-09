import Title from "../typography/title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./character-card-style.scss";
import { memo } from "react";

interface ICharacterCardProps {
  imageUrl: string;
  characterName: string;
  handleCardClick: () => void;
}

const CharacterCard = memo(
  ({ imageUrl, characterName, handleCardClick }: ICharacterCardProps) => {
    return (
      <div className="character-card-wrapper" onClick={handleCardClick}>
        <div className="character-img-container">
          <LazyLoadImage src={imageUrl} aria-labelledby={characterName} />
        </div>
        <Title
          id={characterName}
          otherClasses="cursor-pointer hover:text-grey2 transition-all duration-200"
          text={characterName}
          variant="h2"
          onClick={handleCardClick}
        />
      </div>
    );
  }
);

export default CharacterCard;
