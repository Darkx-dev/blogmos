"use client";
import React, { useState, useRef, useMemo } from "react";
import { Jodit } from "jodit-react";
import { useAuth } from "@/context/AuthContext";
import { extractFirstImageSrc } from "@/utils/html";
import DOMPurify from "dompurify";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { compressImage } from "@/utils/image";
import Image from "next/image";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const New: React.FC = () => {
  const { user } = useAuth();
  const [content, setContent] = useState<string>("");
  const authorId = user?.userId;
  const [error, setError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [headerImage, setHeaderImage] = useState<string>("");
  const router = useRouter();

  const config = useMemo(
    () => ({
      readonly: false,
      toolbar: true,
      toolbarSticky: false,
      toolbarAdaptive: false,
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "eraser",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "video",
        "table",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "hr",
        "copyformat",
        "fullsize",
        "print",
        "about",
        "|",
      ],
      // Adding image options to the context menu
      contextmenu: {
        items: {
          image: "Image Properties",
        },
      },
      // Adding style classes for images
      style: {
        image: "image-styling inline-block", // Class to add to images
      },
    }),
    []
  );

  const handleHeaderImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const compressedImage = await compressImage(
          reader.result as string,
          0.7
        );
        setHeaderImage(compressedImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return setError("Please login first");
    try {
      const sanitizedContent = DOMPurify.sanitize(content);

      // Compress images in the content
      const parser = new DOMParser();
      const doc = parser.parseFromString(sanitizedContent, "text/html");
      const body = doc.body; // Focus on the body content
      const images = Array.from(body.getElementsByTagName("img"));

      for (let img of images) {
        const src = img.getAttribute("src");
        if (src && src.startsWith("data:image")) {
          const compressedSrc = await compressImage(src, 0.7); // Adjust quality as needed
          img.setAttribute("src", compressedSrc);
        }
      }

      const compressedContent = body.innerHTML; // Use innerHTML of body

      const response = await api.post("/posts", {
        title,
        description,
        content: compressedContent,
        authorId,
        tags,
        coverImage: headerImage || extractFirstImageSrc(compressedContent),
      });
      const data = response.data;
      router.push(`/blogs/${data._id}`);
    } catch (err) {
      setError(
        "Failed to create post. Please try again or Relogin (Make sure to copy your content"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="headerImage" className="block text-sm font-medium">
            Header Image
          </label>
          <input
            type="file"
            id="headerImage"
            accept="image/*"
            onChange={handleHeaderImageUpload}
            className="mt-1 block w-full"
          />
          {headerImage && (
            <Image
              src={headerImage}
              alt="Header preview"
              className="mt-2 max-h-40 object-cover w-auto h-auto"
              width={0}
              height={0}
              sizes="200"
            />
          )}
        </div>
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

        <div className="text-black">
          <JoditEditor
            value={content}
            config={config}
            onChange={(newContent: string) => {
              setContent(newContent);
            }}
            onBlur={(newContent: string) => setContent(newContent)}
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

export default New;
