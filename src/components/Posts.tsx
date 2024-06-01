import prisma from "@/lib/prisma";
import Post from "./Post";

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

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ul>{posts && posts.map((post) => <Post key={post.id} post={post} />)}</ul>
  );
}
