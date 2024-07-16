"use client";
import React, { useState, useEffect } from "react";
import { postTypes } from "@/types/models";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { usePaginate } from "@/context/PaginateContext";

const Blogs = () => {
  const [posts, setPosts]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCurrentPage, setTotalPages, totalPages, currentPage } = usePaginate();
  const limit = 8;

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${currentPage}&limit=${limit}`,
          { credentials: "include", cache: "no-cache" }
        );
        const data = await response.json();
        console.log(data)
        if (isMounted) {
          setPosts([...data.posts]);
          setTotalPages(data.totalPages);
          setCurrentPage(data.currentPage)
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [currentPage]); // Only depend on page

  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="px-4 max-sm:px-2 md:px-32 min-h-screen pb-10">
      <section id="new-posts" className="mt-5">
        <h1 className="border-l-4 border-pink-500 pl-1 text-2xl font-bold mb-4">
          Latest blogs
        </h1>
        <hr className="my-4" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-fr"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {posts.map((post: postTypes, index: number) => (
            <Card
              key={post._id}
              idx={index}
              title={post.title!}
              description={post.description!}
              imgSrc={post.coverImage}
              createdAt={post.createdAt}
              author={post.author?.username}
              authorId={post.author?._id}
              postId={post._id}
            />
          ))}
        </motion.div>
        {loading && (
          <div className="flex fixed h-screen w-screen left-0 top-0 items-center justify-center">
            <Loader />
          </div>
        )}
        
      </section>
    </div>
  );
};

const Skeleton = ({ idx }: { idx: number }) => {
  return (
    <div
      // // variants={cardVariants}
      // initial="hidden"
      // // animate="visible"
      // transition={{ delay: idx * 0.1 }}
      className={`w-full relative overflow-hidden bg-gray-700/10 rounded-lg shadow-lg dark:bg-zinc-800 transform transition-all duration-300 hover:scale-105 ${
        idx % 3 === 0 ? "md:col-span-3" : "md:col-span-2"
      }`}
    >
      <div className="h-fit md:min-h-72 overflow-hidden">
        <div
          className="rounded object-cover w-full min-h-72 transition-transform duration-300 hover:scale-110"
          // src={imgSrc || "/default-cover.png"}
          // alt={title}
          // sizes="150"
          // width={0}
          // height={0}
          // priority
        />
      </div>
      <div className="p-4 absolute left-0 bottom-0 backdrop-blur w-full">
        <div>
          <a
            // href={`/blogs/${postId}`}
            className="block text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
          >
            {/* {trimString(title, 70)} */}
          </a>
          <p className="mt-2 text-sm text-gray-400">
            {/* {trimString(description, 80) || "No description"} */}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div
              className="object-cover h-8 w-8 rounded-full"
              // src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg"
              // alt="Avatar"
              // width={32}
              // height={32}
              // priority={false}
            />
            <a
              // href={`/profile/${authorId}`}
              className="ml-2 text-sm font-medium text-white hover:underline"
            >
              {/* {author} */}
            </a>
          </div>
          <span className="text-xs text-gray-400">
            {/* {moment(createdAt).format("MMM DD, YYYY")} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
