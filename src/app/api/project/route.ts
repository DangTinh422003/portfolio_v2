import prisma from "@/common/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = await prisma.project.findMany();
    return NextResponse.json({
      error: null,
      status: 200,
      data
    })
  } catch (error) {
    return NextResponse.json({
      error: "Error",
      status: 500,
      data: null
    })
  }
}