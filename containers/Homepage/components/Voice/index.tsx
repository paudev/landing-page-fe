import { FC } from "react";
import TextSection from "../TextSection";
import Waveform from "./Waveform";
import VoiceGroup from "./VoiceGroup";

const Voice: FC = () => {
  return (
    <section className="flex flex-col">
      <TextSection
        title="AI Voice - Coming Soon"
        subTitle="Hear your Companions!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <div className="flex flex-col linear-gradient-4 justify-center items-center py-12 gap-8">
        <VoiceGroup />
        <Waveform />
      </div>
    </section>
  );
};

export default Voice;
