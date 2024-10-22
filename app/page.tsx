import Container from "@/components/shared/Container";
import { getCharacters } from "@/containers/Character/api/getCharacters";
import Character from "@/containers/Homepage/components/Character";
import Fantasies from "@/containers/Homepage/components/Fantasies";
import GenerateAI from "@/containers/Homepage/components/GenerateAI";
import Navigation from "@/containers/Homepage/components/Navigation";
import Roleplay from "@/containers/Homepage/components/Roleplay";
import Voice from "@/containers/Homepage/components/Voice";
import { getPlaceholderImage } from "@/lib/image";

export const dynamic = "force-dynamic";

const Home = async () => {
  const { characters, roleCharacters } = await getCharacters();

  const images = await Promise.all(
    characters.map(async (c) => {
      const { src, placeholder } = await getPlaceholderImage(c.image_url || "");
      return { src, placeholder };
    })
  );

  const roleImages = await Promise.all(
    roleCharacters.map(async (c) => {
      const { src, placeholder } = await getPlaceholderImage(c.image_url || "");
      return { src, placeholder };
    })
  );

  return (
    <Container>
      <Navigation />
      <section className="flex flex-col gap-y-16">
        <Character characters={characters} images={images} />
        <Fantasies />
        <Roleplay characters={roleCharacters} images={roleImages} />
        <Voice />
        <GenerateAI />
      </section>
    </Container>
  );
};

export default Home;
