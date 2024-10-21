"use client";

import { FC, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { voiceData } from "../../lib/constant";

const VoiceGroup: FC = () => {
  const [selected, setSelected] = useState(2);
  return (
    <div className="flex flex-col gap-8 items-center md:flex-row">
      {voiceData.map((v, idx) => (
        <div
          key={`voice-${idx}`}
          className={clsx(
            "relative rounded-full",
            idx === selected
              ? "h-[149px] w-[149px] border-2  border-nectar-gray-1"
              : "h-[109px] w-[109px]"
          )}
          onClick={() => setSelected(idx)}
        >
          <Image
            src={v.image}
            alt={v.image}
            fill
            className={clsx("rounded-full", idx === 2 && "p-[4px]")}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default VoiceGroup;
