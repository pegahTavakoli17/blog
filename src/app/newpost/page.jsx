"use client";
import CreateNewPostBTN from "@/components/CreateNewPostBTN";
import React, { useState } from "react";

export default function PostPage() {
  const [newPost, setNewPost] = useState({
    title: "",
    summery: "",
    content: "",
  });

  const handleChange = (key) => (event) => {
    setNewPost({ ...newPost, [key]: event.target.value });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-start max-w-6xl p-4 mx-auto space-y-4 md:pt-8">
        {/* title */}
        <div className="flex flex-col w-full">
          <span className="font-bold"> title:</span>
          <input
            className="p-1 border rounded-md w-100"
            value={newPost.title}
            placeholder="title"
            onChange={handleChange("title")}
          />
        </div>
        {/* summery */}
        <div className="flex flex-col w-full">
          <span className="font-bold"> summery:</span>
          <textarea
            className="p-1 border rounded-md w-100"
            value={newPost.summery}
            placeholder="summery"
            onChange={handleChange("summery")}
            rows={5}
          />
        </div>
        {/* content */}
        <div className="flex flex-col w-full">
          <span className="font-bold"> content:</span>
          <textarea
            className="p-1 border rounded-md w-100 "
            value={newPost.content}
            placeholder="content"
            onChange={handleChange("content")}
            rows={10}
          />
        </div>
      </div>
      {/* submit btn */}
      <CreateNewPostBTN
        title={newPost.title}
        summery={newPost.summery}
        content={newPost.content}
      />
    </div>
  );
}
