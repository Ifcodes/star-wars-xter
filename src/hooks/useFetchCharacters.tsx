/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchCharacters = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const modifyImageUrl = (image: any) => {
    return `https://picsum.photos/id/${image.id}/367/267`;
  };

  const getCharacters = async () => {
    setLoading(true);
    try {
      // get pagenated image list from picsum
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );

      // get pagenated character list from star wars
      const chars = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );

      if (
        res.data &&
        res.data.length > 0 &&
        chars.data &&
        chars.data.results.length > 0
      ) {
        // add imageUrl to each character object.
        const characters = chars.data.results.map((ch: any, index: number) => {
          return {
            ...ch,
            imageUrl: modifyImageUrl(res.data[index]),
          };
        });

        setCharacters(characters);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log({ error });
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return { characters, loading, error, page, setPage, getCharacters };
};
