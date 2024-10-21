import { Dispatch, FC, SetStateAction } from "react";
import clsx from "clsx";
import { generateAITextData } from "../../lib/constant";

type Props = {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

const TextGroup: FC<Props> = ({ selected = 0, setSelected }) => {
  return (
    <div className="flex flex-col">
      {generateAITextData.map((item, idx) => (
        <div
          key={`text-${idx}`}
          className={clsx(
            "flex flex-col py-4",
            idx === selected
              ? "linear-gradient-3"
              : "border-l-2 border-nectar-dark-gray"
          )}
          onClick={() => setSelected(idx)}
        >
          <p className="pl-6 text-white">{item.title}</p>
          <p className="pl-6 text-nectar-white-3">{item.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default TextGroup;
