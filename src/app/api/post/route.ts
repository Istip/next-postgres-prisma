import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();

  const { title, content, author } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: { name: author },
      },
    },
  });

  return NextResponse.json(result);
}
