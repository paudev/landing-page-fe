"use client";

import { FC } from "react";
import Card from "@/components/Card";
import EmojiGroup from "./EmojiGroup";
import { Character as CharacterType } from "@/models/character";
import { Image } from "@/models/image";
import useActiveCard from "../hooks/useActiveCard";
import Link from "next/link";
import useArraySplit from "../hooks/useArraySplit";

type Props = {
  characters: CharacterType[];
  images: Image[];
};

const Character: FC<Props> = ({ characters, images }) => {
  const [activeCard, setActiveCard] = useActiveCard(null);
  const { activeSplit, setActiveSplit, activeData, splitLength } =
    useArraySplit(characters ?? []);
  const { setActiveSplit: setActiveSplitImage, activeData: imageData } =
    useArraySplit(images ?? []);

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
        <EmojiGroup
          activeSplit={activeSplit}
          setActiveSplit={setActiveSplit}
          setActiveSplitImage={setActiveSplitImage}
          splitLength={splitLength}
        />
      </div>
      <div className="flex flex-col gap-x-2 justify-end md:w-4/6 md:flex-row">
        {activeData.length !== 0 &&
          activeData.map((data, idx) => {
            if (idx < 3)
              return (
                <Link key={`character-${idx}}`} href={`/character/${data.id}`}>
                  <div className="w-full md:w-[199px]">
                    <Card
                      title={data.name}
                      description={data.description}
                      cardImg={imageData[idx].src}
                      placeholderImg={imageData[idx].placeholder}
                      cardHeight="h-[285px]"
                      showFullDetails={idx === activeCard}
                      onMouseEnter={() => setActiveCard(idx)}
                      onMouseLeave={() => setActiveCard(null)}
                    />
                  </div>
                </Link>
              );
          })}
      </div>
    </section>
  );
};

export default Character;
