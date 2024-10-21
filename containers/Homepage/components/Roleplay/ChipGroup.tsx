"use client";

import { FC, useState } from "react";
import Chip from "@/components/Chip";

const chips = [
  { label: "Action" },
  { label: "Alien" },
  { label: "Anime" },
  { label: "Arab" },
  { label: "Asexual" },
  { label: "Assistant" },
  { label: "BBW" },
  { label: "BDSM" },
  { label: "Bisexual" },
  { label: "Bondage" },
  { label: "Books" },
  { label: "Breeding" },
  { label: "Bully" },
  { label: "CNC" },
  { label: "Chastity" },
  { label: "Cheating" },
  { label: "Dandere" },
  { label: "Demi" },
  { label: "Human" },
  { label: "Deredere" },
  { label: "Detective" },
  { label: "Dilf" },
  { label: "Dominant" },
  { label: "Elf" },
  { label: "Fandom" },
];

const ChipGroup: FC = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-row gap-2 overflow-auto h-6 flex-nowrap hide-scroll">
      {chips.map((chip, idx) => (
        <Chip
          key={`chip-${idx}`}
          label={chip.label}
          variant={selected === idx ? "primary" : "secondary"}
          onClick={() => setSelected(idx)}
        />
      ))}
    </div>
  );
};

export default ChipGroup;
