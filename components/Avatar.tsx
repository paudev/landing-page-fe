import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  className: string;
};

const Avatar: FC<Props> = ({ src, className }) => {
  return (
    <div className={clsx("w-9 h-9 rounded-full relative", className)}>
      <Image
        fill
        className="object-cover rounded-full"
        alt={src}
        src={src}
        sizes="(max-width: 36px) 100vw"
        priority
      />
    </div>
  );
};

export default Avatar;
