import { Fantasy } from "@/models/fantasy";
import { getApiRevalidate, getBaseUrl } from "@/config/serverConfig";

type FantasyResponse = {
  fantasies: Fantasy[];
};

export const getFantasies = async () => {
  const response = await fetch(`${getBaseUrl()}/api/fantasies?limit=3`, {
    next: { revalidate: getApiRevalidate() },
  });
  const { fantasies }: FantasyResponse = await response.json();
  return fantasies || [];
};
