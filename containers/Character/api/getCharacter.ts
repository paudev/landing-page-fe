import { getBaseUrl } from "@/config/serverConfig";
import { Character } from "@/models/character";

export type CharacterResponse = {
  data: Character;
};

export const getCharacter = async (id: string) => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/character/${id}`, {
      cache: "no-store",
    });
    const result: CharacterResponse = await response.json();
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
