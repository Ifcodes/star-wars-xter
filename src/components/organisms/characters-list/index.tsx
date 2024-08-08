/* eslint-disable @typescript-eslint/no-explicit-any */
import Text from "../../atoms/typography/Text";
import Title from "../../atoms/typography/title";
import "./character-list-styles.scss";
import CharacterCard from "../../atoms/character-card";
import Loading from "../../molecules/loading/loading";
import { useFetchCharacters } from "../../../hooks/useFetchCharacters";
import Pagenation from "../../atoms/pagenation";

const CharactersList = () => {
  const { page, characters, loading, error, getCharacters, setPage } =
    useFetchCharacters();

  return (
    <section role="Character List Section" className="character-list-wrapper">
      <header>
        <Title text="Characters" variant="h1" />
        <Text text="Here are your favourite star wars character." />
      </header>
      <Loading
        count={9}
        isLoading={loading}
        error={error}
        handleErrorCta={getCharacters}
      />
      <div className="character-list">
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard
              key={character.imageUrl}
              imageUrl={character.imageUrl}
              characterName={character.name}
            />
          ))}
      </div>
      <div className="flex justify-end">
        <Pagenation
          handleCurrentPage={setPage}
          currentPage={page}
          totalPerPage={10}
          totalItems={82}
        />
      </div>
    </section>
  );
};

export default CharactersList;
