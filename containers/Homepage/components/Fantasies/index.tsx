import { FC } from "react";
import TextSection from "../TextSection";
import CardGroup from "./CardGroup";
import ButtonGroup from "./ButtonGroup";
import { getPlaceholderImage } from "@/lib/image";
import { getFantasies } from "../../api/getFantasies";

const Fantasies: FC = async () => {
  const fantasies = await getFantasies();

  const images = await Promise.all(
    fantasies.map(async (c) => {
      const { src, placeholder } = await getPlaceholderImage(c.image_url);
      return { src, placeholder };
    })
  );

  return (
    <section className="w-full flex flex-col gap-y-2">
      <TextSection
        title="AI Fantasies"
        subTitle="Live your dream experience."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <CardGroup fantasies={fantasies} images={images} />
      <ButtonGroup />
    </section>
  );
};

export default Fantasies;
