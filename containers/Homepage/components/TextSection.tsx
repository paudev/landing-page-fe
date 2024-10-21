import { FC } from "react";

type Props = {
  title: string;
  subTitle: string;
  description?: string;
};

const TextSection: FC<Props> = ({ title, subTitle, description }) => {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col md:w-1/3 gap-y-3 mb-3">
        <h3 className="text-nectar-red font-semibold text-base">{title}</h3>
        <h2 className="text-nectar-white-1 font-semibold text-lg ">
          {subTitle}
        </h2>
        <p className="text-nectar-gray-2">{description}</p>
      </div>
    </section>
  );
};

export default TextSection;
