/* eslint-disable @typescript-eslint/no-explicit-any */
import { http, HttpResponse } from "msw";
import { characterImagesData, charactersData } from "./mock-data";

export const handlers = [
  http.get("https://swapi.dev/api/people", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const searchItem = url.searchParams.get("search");
    console.log(searchItem);
    if (searchItem) {
      const searchData = handleSearchResponse(searchItem, Number(page));
      return HttpResponse.json(searchData, { status: 200 });
    }

    const charData = handlePaginatedCharListResponse(Number(page));

    return HttpResponse.json(charData, { status: 200 });
  }),
  http.get("https://picsum.photos/v2/list", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const limit = url.searchParams.get("limit");
    const imageData = handlePaginatedImageListResponse(
      Number(page),
      Number(limit)
    );

    return HttpResponse.json(imageData, { status: 200 });
  }),
];

const generatePaginatedList = (data: any[], page: number, limit: number) => {
  const start = page === 1 ? 0 : page * limit - limit;
  const splittedList = data.slice(start, start + limit);

  return splittedList;
};

const handlePaginatedCharListResponse = (page: number) => {
  const splittedList = generatePaginatedList(charactersData.results, page, 10);
  const modifiedData = {
    ...charactersData,
    results: splittedList,
    next: `https://swapi.dev/api/people/?page=${page + 1}`,
    previous: `https://swapi.dev/api/people/?page=${page}`,
  };

  return modifiedData;
};

const handlePaginatedImageListResponse = (page: number, limit: number) => {
  const splittedList = generatePaginatedList(characterImagesData, page, limit);

  return splittedList;
};

const handleSearchResponse = (searchItem: string, page: number) => {
  const filteredList = charactersData.results.filter((dt) =>
    dt.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  const data = generatePaginatedList(filteredList, page, 4);

  return data;
};
