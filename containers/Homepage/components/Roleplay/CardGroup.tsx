"use client";

import { FC } from "react";
import Card from "@/components/Card";
import { Character } from "@/models/character";
import { Image } from "@/models/image";
import { useRouter } from "next/navigation";
import useActiveCard from "../../hooks/useActiveCard";
import Link from "next/link";

type Props = {
  characters: Character[];
  images: Image[];
};

const CardGroup: FC<Props> = ({ characters, images }) => {
  const [activeCard, setActiveCard] = useActiveCard(null);
  const router = useRouter();

  const onChatNow = () => router.push("/nectar");

  return (
    <div className="grid grid-cols-1 gap-4 pt-6 pb-2 md:grid-cols-4">
      {characters?.map((data, idx) => (
        <Link key={`fantasies-${idx}}`} href={`/character/${data.id}`}>
          <Card
            title={data.name}
            description={data.description}
            cardImg={images[idx].src}
            placeholderImg={images[idx].placeholder}
            cardHeight="h-[412px]"
            showFullDetails={idx === activeCard}
            onMouseEnter={() => setActiveCard(idx)}
            onMouseLeave={() => setActiveCard(null)}
            onChatNow={onChatNow}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardGroup;
