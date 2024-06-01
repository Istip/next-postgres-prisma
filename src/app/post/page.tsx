"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreatePost() {
  const emptyState = { title: "", content: "", author: "" };
  const [post, setPost] = useState(emptyState);

  const inputStyles =
    "p-4 border border-zinc-950 bg-zinc-900/75 rounded-xl w-full outline-none focus:ring-2 ring-sky-600";

  const handleReset = () => setPost(emptyState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("An error occurred: ", error);
    } finally {
      handleReset();
    }
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
          required
        />
        <textarea
          className={inputStyles}
          name="content"
          value={post.content}
          rows={5}
          placeholder="Write your content here"
          onChange={handleChange}
          required
        />
        <input
          className={inputStyles}
          name="author"
          value={post.author}
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          required
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
