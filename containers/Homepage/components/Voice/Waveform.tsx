import Icon from "@/components/Icon/icon";
import { FC } from "react";

const Waveform: FC = () => (
  <div className="flex flex-row gap-10 justify-between">
    <Icon name="Wave1" />
    <div className="flex flex-row gap-4">
      <Icon name="LeftQuote" />
      <h3 className="text-base line-clamp-2 text-white">
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod tempor.
      </h3>
      <Icon name="RightQuote" />
    </div>
    <Icon name="Wave2" />
  </div>
);

export default Waveform;
