import { NextRequest, NextResponse } from "next/server";
import { character } from "@/lib/constant";

const getHandler = (_request: NextRequest): NextResponse => {
  return NextResponse.json(character);
};

export { getHandler as GET };
