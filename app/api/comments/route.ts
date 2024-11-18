import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  try {
    //   if (!user?.email) {
    //     return NextResponse.json(
    //       { message: "You need to be logged in to create a comment." },
    //       { status: 401 },
    //     );
    //   }
    const { postId, content } = await req.json();
    const newPost = await prisma.comment.create({
      data: { postId, content, authorEmail: user.email },
    });
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error: ${error}` }, { status: 500 });
  }
}
