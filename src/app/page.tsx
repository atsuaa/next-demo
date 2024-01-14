import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  // pageでエラーが投げられたらerror.tsxが代わりに表示される
  // throw new Error("test aaaaaaaaaaa");

  async function getData() {
    const res = await fetch("https://api.example.com/...");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  return (
    <main>
      <Suspense>Hello, app page !!</Suspense>
    </main>
  );
}
