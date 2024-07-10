import api from "@/utils/api";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"}/posts/${
      params.id
    }`,
    { next: { tags: ["post"] }, credentials: "include", cache: "no-cache" }
  ).catch((err) => console.error(err));

  const post = await response?.json();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className=" shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
          <div className="flex flex-col justify-center mb-4">
            {/* <Image
              className="h-10 w-10 rounded-full mr-3"
              src=""
              alt="Author"
              height="40"
              width="40"
            /> */}
            <div>
              <Link href={`/profile/${post.author._id}`} className="text-sm font-medium">@{post.author.username}</Link>
              <p className="text-sm text-gray-500">
                {moment(post.createdAt).format("MMM DD YYYY")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Description : {post.description}
              </p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
          <div className="mt-10">
            {post.tags?.map((tag: string, _: number) => {
              return (
                <span
                  key={_}
                  className="inline-block dark:bg-gray-600/50 px-3 shadow-sm bg-gray-600/10 py-1 text-sm font-semibold rounded-full mr-2 mb-2"
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;
