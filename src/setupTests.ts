import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import { server } from "./mocks/server";

beforeAll(() => {
  console.log("listening");
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

expect.extend(matchers);
