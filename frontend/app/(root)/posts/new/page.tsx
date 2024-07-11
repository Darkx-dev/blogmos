"use client";
import { useAuth } from "@/context/AuthContext";
import api from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
import { extractFirstImageSrc } from "@/utils/html";
import DOMPurify from "dompurify";

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuth();
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: [3, 4, false] }], // Headings
      ["bold", "italic", "underline"], // Basic formatting
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      ["blockquote"], // Blockquote
      ["link", "image"], // Links and images
      ["clean"], // Remove formatting
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "blockquote",
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
    <div className="max-w-3xl mx-auto px-4 py-8 font-mono">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium ">
            Title (*)
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-md outline-none bg-zinc-500/10 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium ">
            Description (*)
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-md outline-none bg-zinc-500/10 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>

        {/* <div>
          <label htmlFor="content" className="block text-sm font-medium ">
            Content
          </label>
          <textarea
            id="content"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-md outline-none bg-zinc-500/10 focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div> */}

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className="min-h-[100px]"
        />

        <div>
          <label htmlFor="tags" className="block text-sm font-medium ">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-md outline-none bg-zinc-500/10 p-2 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
