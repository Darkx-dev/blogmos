"use server";
import React, { ReactNode } from "react";
import { postTypes } from "@/types/models";
import Card from "@/components/Card";
import { extractFirstImageSrc } from "@/utils/html";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"}/posts`,
    { next: { tags: ["postsss"] }, credentials: "include", cache: "no-cache" }
  ).catch((err) => console.error(err));

  const posts = await response?.json();
  
  return (
    <div className="px-4 max-sm:px-2 md:px-32 min-h-screen pb-10">
      <section id="new-posts" className="mt-5">
        <h1 className="border-l-4 border-pink-500 pl-1">Recent posts</h1>
        <hr className="my-2" />
        <div className="grid w-full place-content-evenly md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto auto-rows-[28rem] ">
          {posts &&
            posts.map((post: postTypes, _: number) => {
              return (
                <Card
                  key={_}
                  idx={_}
                  title={post.title!}
                  description={post.description!}
                  imgSrc={post.coverImage}
                  createdAt={post.createdAt}
                  author={post.author?.username}
                  authorId={post.author?._id}
                  postId={post._id}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

const Skeleton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
      {children}
    </div>
  );
};

export default Home;
