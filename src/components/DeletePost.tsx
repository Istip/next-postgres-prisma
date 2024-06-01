"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePost({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRemove = async () => {
    setLoading(true);

    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRemove}
      className="absolute px-4 py-2 bg-zinc-800 text-zinc-50 right-2 top-2 rounded-lg disabled:cursor-not-allowed disabled:bg-zinc-800/75"
      disabled={loading}
    >
      x
    </button>
  );
}
