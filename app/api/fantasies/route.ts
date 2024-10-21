import { NextResponse } from "next/server";
import { fantasies } from "@/lib/constant";

const getHandler = (): NextResponse => {
  return NextResponse.json(fantasies);
};

export { getHandler as GET };
