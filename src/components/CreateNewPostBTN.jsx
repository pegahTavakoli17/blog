"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import styled from "styled-components";
export default function CreateNewPostBTN({ title, summery, content }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const Button = styled.button`
    background: #ffb300;
    border-radius: 3px;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 1em;
    width: 120px;
    margin-left: auto;
  `;
  const addNewPost = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          title: title,
          summery: summery,
          content: content,
        }
      );
      if (response.status === 201) {
        setLoading(false);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <div className="flex w-full max-w-6xl mx-auto flex-end">
      <Button onClick={addNewPost}>
        {!loading && (
          <div className="flex items-center justify-center gap-1">
            <FaCheckCircle />
            submit
          </div>
        )}
        {loading && <PulseLoader color="#fff" size={4} />}
      </Button>
    </div>
  );
}
