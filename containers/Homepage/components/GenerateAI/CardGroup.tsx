import { FC } from "react";
import Card from "@/components/Card";
import { generateAIData } from "../../lib/constant";

type Props = {
  selected: number;
};

const CardGroup: FC<Props> = ({ selected }) => {
  return (
    <div className="flex flex-row justify-around gap-4">
      {generateAIData[selected].map((data, idx) => (
        <div key={`generate-${idx}}`} className="w-[189px]">
          <Card cardHeight="h-[288px]" cardImg={data.avatarImg} />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
