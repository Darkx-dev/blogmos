"use server";
import LargeCard from "@/components/cards/LargeCard";
import MediumCard from "@/components/cards/MediumCard";
import Tag from "@/components/tag/Tag";
import React from "react";
import api from "@/utils/api";

const HomePage = async () => {
  const posts: any = await (await api.get('/posts')).data
  
  if (posts)
    return (
      <div className="px-32 max-md:px-4">
        {/* <h1>Bro : {posts.length}</h1> */}
        <div
          className="mb-10 mt-5 flex gap-5 flex-nowrap hide-scrollbar "
          id="top-tags"
        >
          <Tag tag={"food"} />
          <Tag tag={"animal"} />
          <Tag tag={"car"} />
        </div>
        <section id="recent-posts" hidden>
          <div
            className="hide-scrollbar flex h-96 gap-5 flex-grow-0 hide-scroll  [&>*:nth-child(3)]:w-full  [&>*:not(:nth-child(3))]:max-w-72 *:min-w-52 max-xl:*:min-w-full"
            id="recent-posts"
          >
            <LargeCard />
            <LargeCard />
            <LargeCard />
          </div>
        </section>
        <section id="popular-posts" hidden>
          <h3 className="mb-5 mt-10 border-l-4 border-orange-500 px-2">
            Popular Posts
          </h3>
          <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            <MediumCard orientation="p" />
            <MediumCard orientation="p" />
            <MediumCard orientation="p" />
            <MediumCard orientation="p" />
          </div>
        </section>
        <section id="new-posts">
          <h3 className="mb-5 mt-10 border-l-4 border-orange-500 px-2">
            New Posts
          </h3>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
            {posts &&
              posts.map((post: any, idx: string) => {
                return <MediumCard key={idx} orientation="l" {...post} />;
              })}
          </div>
        </section>
      </div>
    );
};

export default HomePage;
