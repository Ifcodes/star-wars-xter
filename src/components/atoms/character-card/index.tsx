import Title from "../typography/title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./character-card-style.scss";

interface ICharacterCardProps {
  imageUrl: string;
  characterName: string;
  handleCardClick: () => void;
}

const CharacterCard = ({
  imageUrl,
  characterName,
  handleCardClick,
}: ICharacterCardProps) => {
  return (
    <div className="character-card-wrapper" onClick={handleCardClick}>
      <div className="character-img-container">
        <LazyLoadImage src={imageUrl} aria-labelledby={characterName} />
      </div>
      <Title
        id={characterName}
        otherClasses="cursor-pointer"
        text={characterName}
        variant="h2"
        onClick={handleCardClick}
      />
    </div>
  );
};

export default CharacterCard;
