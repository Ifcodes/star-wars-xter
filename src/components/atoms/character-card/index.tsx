import Title from "../typography/title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./character-card-style.scss";

interface ICharacterCardProps {
  imageUrl: string;
  characterName: string;
}

const CharacterCard = ({ imageUrl, characterName }: ICharacterCardProps) => {
  return (
    <div className="character-card-wrapper">
      <div className="character-img-container">
        <LazyLoadImage src={imageUrl} aria-labelledby={characterName} />
      </div>
      <Title id={characterName} text={characterName} variant="h2" />
    </div>
  );
};

export default CharacterCard;
