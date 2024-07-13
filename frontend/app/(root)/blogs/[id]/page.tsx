import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Content from "@/components/Content";

const Post = async ({ params }: { params: { id: string } }) => {
  "use server";
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`,
    { next: { tags: ["post"] }, credentials: "include", cache: "no-cache" }
  ).catch((err) => console.error(err));

  const post = await response?.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" suppressHydrationWarning>
      <article className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        {post?.coverImage && (
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={post?.coverImage}
              alt={post?.title}
              className="transition-transform object-cover duration-300 hover:scale-105"
              width={0}
              height={0}
              sizes="150"
              priority
            />
          </div>
        )}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white capitalize">
            {post?.title}
          </h1>
          <div className="flex items-center mb-6">
            <Image
              src={post?.author?.avatar || "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXNrMGVjOXI2NjV4bmM5OWsxdDgycGg0MjRpMDZjejhvazRpdjZneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.webp"}
              alt={post?.author?.username}
              width={40}
              height={40}
              className="rounded-full mr-4"
              priority
            />
            <div>
              <Link
                href={`/profile/${post?.author?._id}`}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                @{post?.author?.username}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {moment(post?.createdAt).format("MMMM DD, YYYY")}
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 italic">
            {post?.description}
          </p>
          <div className="prose max-w-full  dark:prose-invert">
            <Content content={post?.content} />
          </div>
          <div className="mt-10 flex flex-wrap">
            {post?.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 rounded-full mr-2 mb-2 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;
