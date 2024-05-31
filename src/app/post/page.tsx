"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreatePost() {
  const emptyState = { title: "", content: "" };
  const [post, setPost] = useState(emptyState);

  const inputStyles =
    "p-4 border border-zinc-950 bg-zinc-900/50 rounded-xl w-full outline-none focus:ring-2 ring-sky-600";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="grid place-items-center">
      <div className="container flex items-center justify-between p-5">
        <h3 className="text-3xl">Add Post</h3>
        <Link className="text-sky-600 font-bold" href="/">
          Back to Feed
        </Link>
      </div>
      <form
        className="flex items-center justify-center flex-col max-w-5xl space-y-2 w-full px-5"
        onSubmit={handleSubmit}
      >
        <input
          className={inputStyles}
          name="title"
          value={post.title}
          type="text"
          placeholder="Title of the Post"
          onChange={handleChange}
        />
        <textarea
          className={inputStyles}
          name="content"
          value={post.content}
          rows={5}
          placeholder="Write your content here"
          onChange={handleChange}
        />
        <button
          className="py-2 bg-sky-600 mt-2 text-sky-200 font-bold uppercase w-full rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
