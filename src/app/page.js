import React from "react";
import Results from "@/components/Results";
import Head from "next/head";
export default async function page() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 10000 },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const results = data;
  console.log(results);
  return (
    <div>
      {/* Head component for SEO */}
      <Head>
        <title>Home Page - blog</title>
        <meta name="description" content="Welcome to blog website!" />
      </Head>
      {/* cards of blogs */}
      {<Results results={results} />}
    </div>
  );
}
