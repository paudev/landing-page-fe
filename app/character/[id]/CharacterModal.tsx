"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  description: string;
  cardImg: string;
  placeholderImg: string;
};

const CharacterModal = ({
  name,
  description,
  cardImg,
  placeholderImg,
}: Props) => {
  const router = useRouter();

  const onChatNow = () => router.push("/nectar");

  return (
    <div className="flex h-[600px] w-[400px]">
      <div className="flex flex-col justify-around gap-4 pt-6 pb-2 md:flex-row w-full">
        <Card
          title={name}
          description={description}
          cardImg={cardImg}
          placeholderImg={placeholderImg}
          cardHeight="h-full"
          showFullDetails
          onChatNow={onChatNow}
        />
      </div>
    </div>
  );
};

export default CharacterModal;
