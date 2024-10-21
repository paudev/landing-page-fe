"use client";

import clsx from "clsx";
import { FC } from "react";

const emojis = [
  { label: "😈" },
  { label: "🔥" },
  { label: "🤓" },
  { label: "😎" },
];

const EmojiGroup: FC = () => {
  const selected = 0;
  return (
    <div className="flex flex-row gap-3 mt-10">
      {emojis.map((emoji, idx) => (
        <div
          key={`emoji-${idx}`}
          className={clsx(
            "flex justify-center items-center w-[56px] h-[56px] text-2xl rounded-full",
            selected === idx ? "bg-nectar-light-gray" : "bg-nectar-dark-gray"
          )}
        >
          {emoji.label}
        </div>
      ))}
    </div>
  );
};

export default EmojiGroup;
