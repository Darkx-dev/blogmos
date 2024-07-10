import api from "@/utils/api";
import moment from "moment";
import Image from "next/image";
import React from "react";

const Post = async ({ params }: { params: { id: string } }) => {
  const post = (await api.get(`/posts/${params.id}`)).data;
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className=" shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            The Future of Artificial Intelligence
          </h1>
          <div className="flex items-center mb-4">
            {/* <Image
              className="h-10 w-10 rounded-full mr-3"
              src=""
              alt="Author"
              height="40"
              width="40"
            /> */}
            <div>
              <p className="text-sm font-medium">@{post.author.username}</p>
              <p className="text-sm text-gray-500">{ moment(post.createdAt).format('MMM DD YYYY')}</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;
