"use client";

import { FC } from "react";
import Card from "@/components/Card";
import Chip from "@/components/Chip";
import { useToggle } from "../../hooks/useToggle";

type Props = {
  likeCount: number;
};

const CardAction: FC<Props> = ({ likeCount }) => {
  const [isToggle, toggle] = useToggle(false);

  return (
    <Card.Action className="py-1 gap-2">
      <Chip
        label="55.5k"
        className="text-nectar-white-1"
        iconProps={{
          name: "Play",
        }}
      />
      <Chip
        label={`${likeCount}`}
        className={isToggle ? "text-nectar-red" : "text-nectar-white-1"}
        iconProps={{
          name: "Heart",
          className: isToggle ? "text-nectar-red" : "text-nectar-white-1",
        }}
        onClick={toggle}
      />
    </Card.Action>
  );
};

export default CardAction;
