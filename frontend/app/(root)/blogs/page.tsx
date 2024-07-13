"use client";
import React, { useState, useEffect, ReactNode, useCallback } from "react";
import { postTypes } from "@/types/models";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { IconTruckLoading } from "@tabler/icons-react";

const Blogs = () => {
  const [posts, setPosts]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}&limit=${limit}`,
          { credentials: "include", cache: "no-cache" }
        );
        const data = await response.json();
        if (isMounted) {
          setPosts([...posts, ...data.posts]);
          setTotalPages(data.totalPages);
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
  }, [page]); // Only depend on page

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className="px-4 max-sm:px-2 md:px-32 min-h-screen pb-10">
      <section id="new-posts" className="mt-5">
        <h1 className="border-l-4 border-pink-500 pl-1 text-2xl font-bold mb-4">
          Recent posts
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {[...Array(2)].map((_, index) => (
              <Skeleton key={index}>o o o o</Skeleton>
            ))}
          </div>
        )}
        {page < totalPages && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

const Skeleton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed h-screen w-screen left-0 top-0 flex justify-center items-center">
      <div
        className="animate-spin inline-block size-20 border-[5px] border-current border-t-transparent rounded-full"
        role="status"
        aria-label="loading"
      >
        {children}
      </div>
    </div>
  );
};

export default Blogs;
