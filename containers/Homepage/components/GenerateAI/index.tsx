"use client";

import { FC, useState } from "react";
import TextSection from "../TextSection";
import CardGroup from "./CardGroup";
import TextGroup from "./TextGroup";

const GenerateAI: FC = ({}) => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full flex flex-col mb-12">
      <TextSection
        title="Generate AI Image"
        subTitle="Beautiful erotic art in seconds."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <div className="flex flex-col justify-between  linear-gradient-2 p-10 md:flex-row">
        <TextGroup selected={selected} setSelected={setSelected} />
        <CardGroup selected={selected} />
      </div>
    </section>
  );
};

export default GenerateAI;
