import { FC } from "react";
import Card from "@/components/Card";
import { generateAIData } from "../../lib/constant";

type Props = {
  selected: number;
};

const CardGroup: FC<Props> = ({ selected }) => {
  return (
    <div className="flex flex-col mt-4 justify-around gap-4 md:flex-row md:mt-0">
      {generateAIData[selected].map((data, idx) => (
        <div key={`generate-${idx}}`} className="w-full md:w-[189px]">
          <Card cardHeight="h-[400px] md:h-[288px]" cardImg={data.avatarImg} />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
