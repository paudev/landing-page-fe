"use client";

import { Dispatch, FC, SetStateAction } from "react";
import clsx from "clsx";

const emojis = [
  { label: "😈" },
  { label: "🔥" },
  { label: "🤓" },
  { label: "😎" },
];

type Props = {
  activeSplit: number;
  setActiveSplit: Dispatch<SetStateAction<number>>;
  setActiveSplitImage: Dispatch<SetStateAction<number>>;
  splitLength: number;
};

const EmojiGroup: FC<Props> = ({
  activeSplit,
  setActiveSplit,
  setActiveSplitImage,
  splitLength,
}) => {
  return (
    <div className="flex flex-row gap-3 mt-10">
      {emojis.map((emoji, idx) => (
        <div
          key={`emoji-${idx}`}
          className={clsx(
            "flex justify-center items-center w-[56px] h-[56px] text-2xl rounded-full",
            activeSplit === idx ? "bg-nectar-light-gray" : "bg-nectar-dark-gray"
          )}
          onClick={() => {
            if (splitLength > idx) {
              setActiveSplit(idx);
              setActiveSplitImage(idx);
            }
          }}
        >
          {emoji.label}
        </div>
      ))}
    </div>
  );
};

export default EmojiGroup;
