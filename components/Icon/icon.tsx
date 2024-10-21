/* eslint-disable react/display-name */
import dynamic from "next/dynamic";

export const Icons = {
  Heart: dynamic(() => import("./Heart")),
  Heart2: dynamic(() => import("./Heart2")),
  Play: dynamic(() => import("./Play")),
  Wave1: dynamic(() => import("./Wave1")),
  Wave2: dynamic(() => import("./Wave1")),
  LeftQuote: dynamic(() => import("./LeftQuote")),
  RightQuote: dynamic(() => import("./RightQuote")),
};

type Props = Omit<JSX.IntrinsicElements["svg"], "name"> & {
  name: keyof typeof Icons;
};

export type { Props as IconProps };

const Icon = ({ name, ...props }: Props) => {
  const Component = Icons[name];

  if (!Component) return null;

  return <Component {...props} />;
};

export default Icon;
