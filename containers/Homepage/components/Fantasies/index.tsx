import { FC } from "react";
import TextSection from "../TextSection";
import CardGroup from "./CardGroup";
import ButtonGroup from "./ButtonGroup";
import { getApiRevalidate, getBaseUrl } from "@/config/serverConfig";
import { Fantasy } from "@/models/fantasy";
import { getPlaceholderImage } from "@/lib/image";

const getFantasies = async () => {
  const response = await fetch(`${getBaseUrl()}/api/fantasies`, {
    next: { revalidate: getApiRevalidate() },
  });
  const result = await response.json();
  return result as Fantasy[];
};

const Fantasies: FC = async ({}) => {
  /** TODO: add limit query in API */
  const fantasies = (await getFantasies())
    .map((c, i) => i < 3 && c)
    .filter(Boolean) as Fantasy[];

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
