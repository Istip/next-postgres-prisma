import Post from "@/components/Post";
import prisma from "@/lib/prisma";

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
    <>
      <h1>Feed</h1>

      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
