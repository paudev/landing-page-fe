import { FC } from "react";
import Card from "@/components/Card";
import EmojiGroup from "./Roleplay/EmojiGroup";
import { Character as CharacterType } from "@/models/character";
import { Image } from "@/models/image";

type Props = {
  characters: CharacterType[];
  images: Image[];
};

const Character: FC<Props> = ({ characters, images }) => {
  return (
    <section className="flex flex-col gap-4 p-4 justify-between grow bg-slate-600 linear-gradient mb-14 md:flex-row md:gap-0 md:p-14">
      <div className="flex flex-col md:w-2/6">
        <h3 className="text-nectar-gray-1 text-lg font-medium mb-2">Are you</h3>
        <h2 className="text-white text-[32px] font-medium mb-6">
          Into a bit danger?
        </h2>
        <p className="text-nectar-gray-1 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <EmojiGroup />
      </div>
      <div className="flex flex-col gap-x-2 justify-end md:w-4/6 md:flex-row">
        {characters.map((data, idx) => {
          if (idx < 3)
            return (
              <div key={`character-${idx}}`} className="w-full md:w-[199px]">
                <Card
                  title={data.name}
                  description={data.description}
                  cardImg={images[idx].src}
                  placeholderImg={images[idx].placeholder}
                  cardHeight="h-[285px]"
                />
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default Character;
