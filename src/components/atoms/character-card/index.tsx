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
      <li
        data-testid="character-list-item"
        aria-label="character-list-item"
        className="character-card-wrapper"
        onClick={handleCardClick}
      >
        <div className="character-img-container">
          <LazyLoadImage
            src={imageUrl}
            aria-labelledby={characterName}
            alt={characterName}
          />
        </div>
        <Title
          id={characterName}
          aria-label="Character name"
          otherClasses="cursor-pointer hover:text-grey2 transition-all duration-200"
          text={characterName}
          variant="h2"
          onClick={handleCardClick}
        />
      </li>
    );
  }
);

export default CharacterCard;
