import clsx from "clsx";
import { FC } from "react";
import Icon, { IconProps } from "./Icon/icon";

type ButtonVariant = "primary" | "secondary";

type Props = {
  label: string;
  iconProps?: IconProps;
  className?: string;
  variant?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Chip: FC<Props> = ({
  label,
  className = "text-nectar-white-2",
  variant = "primary",
  onClick,
  iconProps,
}) => {
  return (
    <button
      className={clsx(
        "flex flex-row items-center gap-1 rounded-full px-4 py-1 text-center",
        variant === "primary" && "bg-nectar-light-gray",
        variant === "secondary" && "bg-nectar-gray-3",
        className
      )}
      onClick={onClick}
    >
      {iconProps && <Icon {...iconProps} />}
      <p className="text-nowrap font-medium text-sm text-center">{label}</p>
    </button>
  );
};

export default Chip;
