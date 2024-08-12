/* eslint-disable @typescript-eslint/no-explicit-any */
import Text from "../../atoms/typography/Text";
import Title from "../../atoms/typography/title";
import "./character-list-styles.scss";
import CharacterCard from "../../atoms/character-card";
import Loading from "../../molecules/loading/loading";
import { useFetchCharacters } from "../../../hooks/useFetchCharacters";
import Pagenation from "../../atoms/pagenation";
import { useCallback, useState } from "react";
import CharacterDetails from "../../molecules/character-details";
import FetchErrorComponent from "../../atoms/fetch-error-component";
import { SearchInput } from "../../atoms/inputs/search-input/SearchInput";
import { useDebounce } from "react-use";
import { ICharacterDataType } from "../../../utils/types";

const CharactersList = () => {
  const [searchItem, setSearchItem] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] =
    useState<ICharacterDataType | null>(null);
  const {
    totalCharacters,
    page,
    characters,
    loading,
    error,
    getCharacters,
    setPage,
    searchCharacters,
  } = useFetchCharacters(searchItem);

  useDebounce(
    () => {
      searchCharacters();
    },
    1000,
    [searchItem]
  );

  const handleCharacterSelection = useCallback((character: any) => {
    setSelectedCharacter(character);
    setOpenModal(true);
  }, []);

  const handlePageChange = useCallback((val: any) => setPage(val), []);

  if (error) {
    return (
      <FetchErrorComponent
        handleCta={getCharacters}
        error={error}
        ctaText="Try Again!"
      />
    );
  }

  return (
    <section
      aria-label="Character List Section"
      className="character-list-wrapper"
    >
      <header className="section-header">
        <div>
          <Title data-testid="page-title" text="Characters" variant="h1" />
          <Text
            data-testid="page-description"
            text="Here are your favourite star wars character."
          />
        </div>
        <SearchInput
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </header>
      <Loading count={9} isLoading={loading} />
      <ul className="character-list">
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard
              key={character.imageUrl}
              imageUrl={character.imageUrl}
              characterName={character.name}
              handleCardClick={() => handleCharacterSelection(character)}
            />
          ))}
      </ul>
      {!loading && characters.length > 0 && (
        <div className="flex justify-end">
          <Pagenation
            handleCurrentPage={handlePageChange}
            currentPage={page}
            totalPerPage={10}
            totalItems={totalCharacters}
          />
        </div>
      )}
      {selectedCharacter && (
        <CharacterDetails
          openModal={openModal}
          closeModal={setOpenModal}
          selectedCharacter={selectedCharacter}
        />
      )}
    </section>
  );
};

export default CharactersList;
