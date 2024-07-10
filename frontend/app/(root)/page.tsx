"use server";
import React, { ReactNode } from "react";
import api from "@/utils/api";
import { postTypes } from "@/types/models";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Home = async () => {
  const posts = await (await api.get("/posts")).data;

if (posts) return (
    <div className="px-4 md:px-32 font-mono">
      <section id="new-posts">
        <h1>New posts</h1>
          <BentoGrid className="max-w-7xl mx-auto md:grid-cols-7">
            {posts.map((post: postTypes, _: number) => {
              return (
                <BentoGridItem
                  key={_}
                  title={post.title}
                  description={post.content}
                  header={<Skeleton>Post Image Goes here</Skeleton>}
                  postId={post._id}
                  className={`${
                    _ % 3 == 0 || _ % 2 === 0
                      ? "md:col-span-2"
                      : "md:col-span-3"
                  } shadow-md`}
                />
              );
            })}
          </BentoGrid>
      </section>
    </div>
  );
};

const Skeleton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
      {children}
    </div>
  );
};

export default Home;
