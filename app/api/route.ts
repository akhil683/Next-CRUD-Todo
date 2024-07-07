import { NextResponse } from "next/server";
import TodoModel from "@/lib/models/TodoModel";

export async function GET(request: Request) {
  return NextResponse.json({ msg: "get method hit" });
}

export async function POST(request: Request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "get method hit" });
}
