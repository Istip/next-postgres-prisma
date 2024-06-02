"use client";

import { useRouter } from "next/navigation";

export default function DeletePost({ id }: { id: string }) {
  const router = useRouter();

  async function handleRemove() {
    try {
      await fetch(`/api/removepost/${id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleRemove}
      className="absolute px-4 py-2 bg-zinc-800 text-zinc-50 right-2 top-2 rounded-lg disabled:cursor-not-allowed disabled:bg-zinc-800/75"
    >
      x
    </button>
  );
}
