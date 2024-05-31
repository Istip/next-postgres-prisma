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
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <hr />
      <small>By {post.author ? post.author.name : "Unknown author"}</small>
    </div>
  );
}
