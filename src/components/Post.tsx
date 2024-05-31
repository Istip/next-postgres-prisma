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
    <div>
      <h3>{post?.author?.name}</h3>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
}
