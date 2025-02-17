/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { ICharacterDataType } from "../utils/types";

export const useFetchCharacters = (searchItem: string) => {
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<ICharacterDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const modifyImageUrl = (image: any) => {
    return `https://picsum.photos/id/${image.id}/367/267`;
  };

  const fetchCharacters = async (
    charactersEndpoint: string,
    photosEndpoint: string
  ) => {
    setLoading(true);
    try {
      // get pagenated character list from star wars
      const chars = await axios.get(charactersEndpoint);

      // get pagenated image list from picsum
      const res = await axios.get(photosEndpoint);

      if (
        (res.data && res.data.length === 0) ||
        (chars.data && chars.data.results.length === 0)
      ) {
        setError("No record found");
        setLoading(false);
      }

      if (
        res.data &&
        res.data.length > 0 &&
        chars.data &&
        chars.data.results.length > 0
      ) {
        // set total characters for pagination
        setTotalCharacters(chars.data.count);

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

  const getCharacters = () => {
    fetchCharacters(
      `https://swapi.dev/api/people/?page=${page}`,
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
  };
  // search characters
  const searchCharacters = (searchItem: string) => {
    fetchCharacters(
      `https://swapi.dev/api/people/?search=${searchItem}`,
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
  };

  useEffect(() => {
    if (!searchItem) {
      getCharacters();
    }

    // for paginated search results
    if (searchItem) {
      fetchCharacters(
        `https://swapi.dev/api/people/?search=${searchItem}&page=${page}`,
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
    }

    return () => {
      setCharacters([]);
    };
  }, [page]);

  return {
    characters,
    loading,
    error,
    page,
    totalCharacters,
    setPage,
    getCharacters,
    searchCharacters,
  };
};
