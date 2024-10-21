import { FC } from "react";
import Avatar from "@/components/Avatar";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  avatarImg?: string;
  cardImg?: string;
  placeholderImg?: string;
  cardHeight?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

type CardActionProps = {
  className?: string;
  children: React.ReactNode;
};

const CardAction = ({ children, className }: CardActionProps) => (
  <div className={clsx("flex flex-row", className)}>{children}</div>
);

const CardRoot: FC<Props> = ({
  /** dummy fallback, will improve this if i have time */
  cardImg = "https://imagedelivery.net/E9jTnsG9warNlQK5dUFRKA/676608de-2755-46e8-9703-5522818d1600/public",
  placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==",
  avatarImg,
  title,
  description,
  cardHeight = "h-56",
  children,
}) => {
  return (
    <div className={clsx("flex-col grow rounded-lg relative", cardHeight)}>
      <div className="absolute bottom-2 left-2 z-10 text-white">
        <div className="flex flex-col gap-1 py-1 px-2">
          {avatarImg && <Avatar className="mb-1" src={avatarImg} />}
          <h3 className="m-0 p-0 font-semibold text-base line-clamp-1">
            {title}
          </h3>
          <p className="m-0 p-0 text-sm line-clamp-2">{description}</p>
          {children}
        </div>
      </div>
      <Image
        fill
        className="object-cover rounded-lg z-0"
        alt={cardImg}
        src={cardImg}
        blurDataURL={placeholderImg}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        priority
      />
    </div>
  );
};

const Card = CardRoot as typeof CardRoot & {
  Action: typeof CardAction;
};

Card.Action = CardAction;

export default Card;
