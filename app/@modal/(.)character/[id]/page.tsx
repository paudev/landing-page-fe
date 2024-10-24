import Modal from "@/components/Modal";
import { getPlaceholderImage } from "@/lib/image";
import CharacterModal from "./CharacterModal";
import { getCharacter } from "@/containers/Character/api/getCharacter";

type Props = {
  params: { id: string };
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
