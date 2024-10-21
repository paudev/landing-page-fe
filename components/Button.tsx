import clsx from "clsx";
import { FC } from "react";

type ButtonVariant = "primary" | "secondary";

type Props = {
  label: string;
  className?: string;
  variant?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button: FC<Props> = ({
  label,
  className,
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "text-white font-medium rounded-full text-sm px-5 py-2.5 text-center",
        variant === "primary" && "bg-nectar-red",
        variant === "secondary" && "bg-nectar-dark-gray text-nectar-white-2",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
