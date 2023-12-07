"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  // Example: Generate a random string with numbers of length 12

  const handleCreateform = (e) => {
    e.preventDefault();
    const randomString = generateRandomString(12);
    router.push(`/create-form/${randomString}`)
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="font-bold text-2xl underline">Create Form</h1>
      <div className="mt-3">
        <button
          className="bg-gray-950 text-white px-10 py-3"
          onClick={handleCreateform}
        >
          {" "}
          + Create
        </button>
      </div>
    </main>
  );
}
