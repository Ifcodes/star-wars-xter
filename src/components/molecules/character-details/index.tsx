/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import { formatDate } from "../../../utils/helpers";
import Text from "../../atoms/typography/Text";
import Title from "../../atoms/typography/title";
import Modal from "../modal";
import "./character-details-styles.scss";

interface ICharacterDetailsProps {
  openModal: boolean;
  selectedCharacter: any;
  closeModal: (val: boolean) => void;
}

interface IDescriptionProps {
  title: string;
  content: string;
}

const Description = ({ title, content }: IDescriptionProps) => {
  return (
    <article className="md:flex items-center">
      <Title text={`${title}:`} variant="h2" />
      <Text text={content} otherClasses="md:ml-4" />
    </article>
  );
};
const CharacterDetails = memo(
  ({ openModal, selectedCharacter, closeModal }: ICharacterDetailsProps) => {
    return (
      <Modal
        showModal={openModal}
        title={selectedCharacter?.name}
        closeModal={closeModal}
      >
        <div className="img-container">
          <img
            src={selectedCharacter?.imageUrl}
            alt={selectedCharacter?.name}
          />
        </div>
        <article className="description">
          <Description
            title="Height"
            content={`${selectedCharacter?.height}m`}
          />
          <Description title="Mass" content={`${selectedCharacter?.mass}kg`} />
          <Description
            title="Films"
            content={selectedCharacter?.films?.length}
          />
          <Description
            title="Birth Year"
            content={selectedCharacter?.birth_year}
          />
          <Description
            title="Added on"
            content={formatDate(selectedCharacter?.created)}
          />
        </article>
      </Modal>
    );
  }
);

export default CharacterDetails;
