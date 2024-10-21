"use client";

import { FC, useState } from "react";
import Card from "@/components/Card";
import { Character } from "@/models/character";
import { Image } from "@/models/image";
import { useRouter } from "next/navigation";

type Props = {
  characters: Character[];
  images: Image[];
};

const CardGroup: FC<Props> = ({ characters, images }) => {
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  const onSetShowFullDetails = (idx: number) => {
    if (idx === active) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };

  const onChatNow = () => router.push("nectar");

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
          showFullDetails={idx === active}
          onClick={() => onSetShowFullDetails(idx)}
          onChatNow={onChatNow}
        />
      ))}
    </div>
  );
};

export default CardGroup;
