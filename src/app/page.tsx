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

  // eslint-disable-next-line no-console
  console.log("✅  posts:", posts);

  return <h1>Feed</h1>;
}
