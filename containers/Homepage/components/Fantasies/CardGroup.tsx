"use client";

import { FC } from "react";
import Card from "@/components/Card";
import CardAction from "./CardAction";
import { Fantasy } from "@/models/fantasy";
import { Image } from "@/models/image";

type Props = {
  fantasies: Fantasy[];
  images: Image[];
};

const CardGroup: FC<Props> = ({ fantasies, images }) => (
  <div className="flex flex-row justify-around gap-4">
    {fantasies.map((f, idx) => (
      <Card
        key={`fantasies-${idx}}`}
        title={f.title}
        description={f.description}
        avatarImg={images[idx].src}
        cardImg={images[idx].src}
        placeholderImg={images[idx].placeholder}
      >
        <CardAction likeCount={f.likes} />
      </Card>
    ))}
  </div>
);
export default CardGroup;
