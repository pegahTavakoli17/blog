import Head from "next/head";
export default async function postPage({ params }) {
  const postId = params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();

  return (
    <div className="w-full">
      {/* head component for SEO */}
      <Head>
        <title> Blog Post Title - Website</title>
        <meta name="description" content="Description of your blog post." />
      </Head>
      {/* blog details */}
      <div className="flex flex-col content-center max-w-6xl p-4 mx-auto md:pt-8 md:flex-row md:space-x-6">
        <div className="p-4 border rounded-md">
          <h2 className="mb-3 text-lg font-bold">{post.title}</h2>
          <p className="mb-3 text-lg">{post.body}</p>
        </div>
      </div>
    </div>
  );
}
