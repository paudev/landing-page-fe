import Container from "@/components/shared/Container";
import Character from "@/containers/Homepage/components/Character";
import Fantasies from "@/containers/Homepage/components/Fantasies";
import GenerateAI from "@/containers/Homepage/components/GenerateAI";
import Navigation from "@/containers/Homepage/components/Navigation";
import Roleplay from "@/containers/Homepage/components/Roleplay";
import Voice from "@/containers/Homepage/components/Voice";
import { getApiRevalidate, getBaseUrl } from "@/config/serverConfig";
import { Character as CharacterType } from "@/models/character";
import { getPlaceholderImage } from "@/lib/image";

type CharacterResponse = {
  characters: CharacterType[];
  roleCharacters: CharacterType[];
};

const getCharacters = async () => {
  const response = await fetch(`${getBaseUrl()}/api/characters?limit=4`, {
    next: { revalidate: getApiRevalidate() },
  });
  const result: CharacterResponse = await response.json();
  return result;
};

const Home = async () => {
  const { characters, roleCharacters } = await getCharacters();

  const images = await Promise.all(
    characters.map(async (c) => {
      const { src, placeholder } = await getPlaceholderImage(c.image_url || "");
      return { src, placeholder };
    })
  );

  const roleImages = await Promise.all(
    characters.map(async (c) => {
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
