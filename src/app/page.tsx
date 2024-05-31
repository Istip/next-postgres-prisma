import Post from "@/components/Post";
import prisma from "@/lib/prisma";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="grid place-items-center">
      <div className="container flex justify-between items-center p-5">
        <h1 className="text-3xl">Post Feed</h1>
        <Link className="text-sky-600 font-bold" href="/post">
          Add a new Post
        </Link>
      </div>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
