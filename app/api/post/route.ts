import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await getCurrentUser();
  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "You need to be logged in to create a post." },
        { status: 401 },
      );
    }
    const { title, content } = await req.json();
    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorEmail: user.email,
      },
    });
    return NextResponse.json({ newPost }, { status: 200 });
    //eslint-disable-next-line
  } catch (e) {
    return NextResponse.json({ error: `Error: ${e}` }, { status: 500 });
  }
}
