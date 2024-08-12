import { http, HttpResponse } from "msw";
import { characterImagesData, charactersData } from "./mock-data";

export const handlers = [
  http.get("https://swapi.dev/api/people", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
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

const handlePaginatedCharListResponse = (page: number) => {
  const start = page === 1 ? 0 : page * 10 - 10;
  const splittedList = charactersData.results.slice(start, start + 10);
  const modifiedData = {
    ...charactersData,
    results: splittedList,
    next: `https://swapi.dev/api/people/?page=${page + 1}`,
    previous: `https://swapi.dev/api/people/?page=${page}`,
  };

  return modifiedData;
};

const handlePaginatedImageListResponse = (page: number, limit: number) => {
  const start = page === 1 ? 0 : page * limit - limit;
  const splittedList = characterImagesData.slice(start, start + limit);

  return splittedList;
};
