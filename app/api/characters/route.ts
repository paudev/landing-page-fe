import { NextResponse } from "next/server";
import { character } from "@/lib/constant";

const getHandler = (): NextResponse => {
  return NextResponse.json(character);
};

export { getHandler as GET };
