import { Character } from "@/models/character";
import { getApiRevalidate, getBaseUrl } from "@/config/serverConfig";

type CharacterResponse = {
  characters: Character[];
  roleCharacters: Character[];
};

export const getCharacters = async () => {
  const response = await fetch(`${getBaseUrl()}/api/characters`, {
    next: { revalidate: getApiRevalidate() },
  });
  const result: CharacterResponse = await response.json();
  return result;
};
