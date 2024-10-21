import { FC } from "react";
import TextSection from "../TextSection";
import ChipGroup from "./ChipGroup";
import CardGroup from "./CardGroup";
import ButtonGroup from "./ButtonGroup";
import { Character } from "@/models/character";
import { Image } from "@/models/image";

type Props = {
  characters: Character[];
  images: Image[];
};

const Roleplay: FC<Props> = async ({ characters, images }) => {
  return (
    <section className="flex flex-col">
      <TextSection title="AI Roleplay" subTitle="Recommended For You." />
      <ChipGroup />
      <CardGroup characters={characters} images={images} />
      <ButtonGroup />
    </section>
  );
};

export default Roleplay;
