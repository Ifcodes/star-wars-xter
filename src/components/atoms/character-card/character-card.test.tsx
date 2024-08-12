import { render, screen } from "@testing-library/react";
import CharacterCard from ".";
import userEvent from "@testing-library/user-event";

describe("should test render and interactions", () => {
  const charData = {
    imageUrl: "https://picsum.photos/200/300",
    characterName: "Sophia glyph",
  };
  const handleCardClick = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    handleCardClick.mockClear();
  });

  it("should render image and character name", () => {
    render(
      <CharacterCard
        imageUrl={charData.imageUrl}
        characterName={charData.characterName}
        handleCardClick={handleCardClick}
      />
    );

    expect(screen.getByAltText("Sophia glyph")).toBeInTheDocument();
    expect(screen.getByText("Sophia glyph")).toBeInTheDocument();
  });

  it("should call handler correctly when image is clicked", async () => {
    render(
      <CharacterCard
        imageUrl={charData.imageUrl}
        characterName={charData.characterName}
        handleCardClick={handleCardClick}
      />
    );

    await user.click(screen.getByAltText(charData.characterName));

    expect(handleCardClick).toBeCalled();
  });

  it("should call handler correctly when character name is clicked", async () => {
    render(
      <CharacterCard
        imageUrl={charData.imageUrl}
        characterName={charData.characterName}
        handleCardClick={handleCardClick}
      />
    );

    await user.click(screen.getByText(charData.characterName));

    expect(handleCardClick).toBeCalled();
  });
});
