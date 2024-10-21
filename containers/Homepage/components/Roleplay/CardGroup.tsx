import { FC } from "react";
import Card from "@/components/Card";
import { Character } from "@/models/character";
import { Image } from "@/models/image";

type Props = {
  characters: Character[];
  images: Image[];
};

const CardGroup: FC<Props> = ({ characters, images }) => {
  return (
    <div className="flex flex-row justify-around gap-4 pt-6 pb-2">
      {characters?.map((data, idx) => (
        <Card
          key={`fantasies-${idx}}`}
          title={data.name}
          description={data.description}
          cardImg={images[idx].src}
          placeholderImg={images[idx].placeholder}
          cardHeight="h-[412px]"
        />
      ))}
    </div>
  );
};

export default CardGroup;
