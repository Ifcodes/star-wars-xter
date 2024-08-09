import { render, screen } from "@testing-library/react";
import CharacterCard from ".";

describe("should render all fields", () => {
  it("should render image and character name", () => {
    const charData = {
      imageUrl: "",
      characterName: "Sophia glyph",
    };
    render(
      <CharacterCard
        imageUrl={charData.imageUrl}
        characterName={charData.characterName}
        handleCardClick={() => {}}
      />
    );

    expect(screen.getByAltText("Sophia glyph")).toBeInTheDocument();
  });
});
