/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Text from "../../atoms/typography/Text";
import Title from "../../atoms/typography/title";
import "./character-list-styles.scss";
import CharacterCard from "../../atoms/character-card";
import Loading from "../../molecules/loading/loading";

const CharactersList = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const modifyImageUrl = (image: any) => {
    return `https://picsum.photos/id/${image.id}/367/267`;
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://picsum.photos/v2/list?page=1")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((dt: any) => ({
          ...dt,
          imageUrl: modifyImageUrl(dt),
        }));

        setCharacters(newData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message);
        console.log({ err });
        setLoading(false);
      });
  }, []);

  return (
    <section role="Character List Section" className="character-list-wrapper">
      <header>
        <Title text="Characters" variant="h1" />
        <Text text="Here are your favourite star wars character." />
      </header>
      <Loading count={9} isLoading={loading} error={error} />
      <div className="character-list">
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard
              key={character.download_url}
              imageUrl={character.imageUrl}
              characterName={character.author}
            />
          ))}
      </div>
    </section>
  );
};

export default CharactersList;
