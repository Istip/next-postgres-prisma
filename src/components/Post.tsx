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
    <li>
      <h3 className="text-3xl">{post?.author?.name}</h3>
      <h4 className="text-xl">{post.title}</h4>
      <p>{post.content}</p>
    </li>
  );
}
