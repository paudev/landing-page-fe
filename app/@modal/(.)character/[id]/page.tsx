import Modal from "@/components/Modal";
import { getBaseUrl } from "@/config/serverConfig";
import { getPlaceholderImage } from "@/lib/image";
import { Character as CharacterType } from "@/models/character";
import CharacterModal from "./CharacterModal";

type Props = {
  params: { id: string };
};

export type CharacterResponse = {
  data: CharacterType;
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

export default async function Character({ params: { id } }: Props) {
  const character = await getCharacter(id);
  if (!character) return null;

  const image = await getPlaceholderImage(character.image_url || "");

  return (
    <Modal>
      <CharacterModal
        name={character.name}
        description={character.description}
        cardImg={image.src}
        placeholderImg={image.placeholder}
      />
    </Modal>
  );
}
