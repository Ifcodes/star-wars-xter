/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import { formatDate } from "../../../utils/helpers";
import Text from "../../atoms/typography/Text";
import Title from "../../atoms/typography/title";
import Modal from "../modal";
import "./character-details-styles.scss";
import { ICharacterDataType } from "../../../utils/types";

interface ICharacterDetailsProps {
  selectedCharacter: ICharacterDataType;
  openModal: boolean;
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
  ({ selectedCharacter, openModal, closeModal }: ICharacterDetailsProps) => {
    const { name, mass, height, imageUrl, films, created, birth_year } =
      selectedCharacter;

    return (
      <Modal showModal={openModal} title={name} closeModal={closeModal}>
        <div className="img-container">
          <img src={imageUrl} alt={name} />
        </div>
        <article className="description">
          <Description title="Height" content={`${height}m`} />
          <Description title="Mass" content={`${mass}kg`} />
          <Description title="Films" content={`${films.length}`} />
          <Description title="Birth Year" content={birth_year} />
          <Description title="Added on" content={formatDate(created)} />
        </article>
      </Modal>
    );
  }
);

export default CharacterDetails;
