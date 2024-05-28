import Link from "next/link";

export default function Card({ result }) {
  return (
    <div className=" relative transition-shadow duration-200 rounded-lg  group sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 md:h-[200px] p-3">
      <div className="p-2">
        <h2 className="text-lg font-bold text-amber-600">{result.title}</h2>
        <p className="flex items-center">
          {result.body.length < 150
            ? result.body
            : result.body.slice(0, 150) + "..."}
        </p>
        <Link
          href={`/blog/${result.id}`}
          className="absolute flex justify-end font-bold right-2 sm:bottom-2"
        >
          Read more...
        </Link>
      </div>
    </div>
  );
}
