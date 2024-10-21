import { NextRequest, NextResponse } from "next/server";
import { fantasies } from "@/lib/constant";

const getHandler = (_request: NextRequest): NextResponse => {
  return NextResponse.json(fantasies);
};

export { getHandler as GET };
