import Link from "next/link";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div className="container flex justify-between items-center p-5">
        <h1 className="text-3xl">Post Feed</h1>
        <Link className="text-sky-600 font-bold" href="/post">
          Add a new Post
        </Link>
      </div>
      <Posts />
    </div>
  );
}
