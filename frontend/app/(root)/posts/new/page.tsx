"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.min.css";
import "highlight.js/styles/tokyo-night-dark.min.css";
import { extractFirstImageSrc, resizeImages } from "@/utils/html";

const ReactQuill = dynamic(
  () => {
    hljs.configure({
      languages: [
        "javascript",
        "CSS",
        "HTML",
        "python",
        "java",
        "c",
        "c++",
        "bash",
        "markdown",
      ],
    });
    // @ts-ignore
    window.hljs = hljs;
    return import("react-quill");
  },
  {
    ssr: false,
    loading: () => <p>Quill loading</p>,
  }
);

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuth();

  const modules = {
    syntax: true,
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "script",
    "indent",
    "link",
    "image",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return setError("Please login first");
    try {
      const sanitizedContent = DOMPurify.sanitize(content);
      const response = await api.post("/posts", {
        title,
        description,
        content: sanitizedContent,
        authorId: user.userId,
        tags,
        coverImage: extractFirstImageSrc(sanitizedContent),
      });
      const data = response.data;
      router.push(`/posts/${data._id}`);
    } catch (err) {
      setError("Failed to create post. Please try again.");
    }
  };

  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => setError(""), 5000);
  }, [error]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title (*)
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title..."
            className="mt-1 block w-full rounded-md py-2 px-4 border-gray-300 shadow-md outline-none  focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description (*)
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description..."
            className="mt-1 block w-full rounded-md py-2 px-4 border-gray-300 shadow-md outline-none focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>

        <div className="relative">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            className=" *:first:*:z-50 *:last:*:min-h-32 z-[999999999]"
            placeholder="Start writing content..."
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="tag1,tag2,tag3..."
            className="mt-1 block w-full px-4 rounded-md border-gray-300 shadow-md outline-none p-2 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setContent("")}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset Content
          </button>

          <button className="rounded-lg relative overflow-hidden w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500">
            <span className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
              Create
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <svg
                className="svg w-8 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
