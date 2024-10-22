import { Dispatch, SetStateAction, useState } from "react";

type ActiveCard = number | null;

type UseActiveCard = (
  cardIdx: ActiveCard
) => [ActiveCard, Dispatch<SetStateAction<ActiveCard>>];

/** probably worthless for now, but maybe there would be some effects we can add here */
const useActiveCard: UseActiveCard = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return [activeCard, setActiveCard];
};

export default useActiveCard;
