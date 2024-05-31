interface Props {
  post: {
    author: {
      name: string | null;
    } | null;
  } & {
    id: string;
    title: string;
    content: string | null;
    published: boolean;
    authorId: string | null;
  };
}

export default function Post({ post }: Props) {
  return (
    <li className="p-8 max-w-5xl mx-5 bg-zinc-900/50 mb-5 rounded-2xl">
      <h3 className="text-3xl">{post?.author?.name}</h3>
      <h4 className="text-xl">{post.title}</h4>
      <p>{post.content}</p>
    </li>
  );
}
