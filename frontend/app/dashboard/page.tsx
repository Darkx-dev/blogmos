"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalLikes: 0,
    totalComments: 0,
  });

  useEffect(() => {
    if (user) {
      // Fetch posts (replace with actual API call)
      setPosts([
        {
          id: "1",
          title: "The Future of AI",
          excerpt:
            "Exploring the potential impact of artificial intelligence on various industries...",
          createdAt: "2023-07-08",
          likes: 120,
          comments: 25,
        },
        {
          id: "2",
          title: "Sustainable Living Tips",
          excerpt:
            "Practical ways to reduce your carbon footprint and live a more eco-friendly lifestyle...",
          createdAt: "2023-07-09",
          likes: 89,
          comments: 18,
        },
        {
          id: "3",
          title: "Mastering Remote Work",
          excerpt:
            "Strategies for staying productive and maintaining work-life balance in a remote work environment...",
          createdAt: "2023-07-10",
          likes: 156,
          comments: 32,
        },
      ]);

      // Fetch stats (replace with actual API call)
      setStats({ totalPosts: 15, totalLikes: 1250, totalComments: 380 });
    }
  }, [user]);

  return (
    <div className="min-h-screen">
      {/* <nav className=" shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-indigo-600">BlogApp</h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {user.username}!</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md  bg-indigo-600 hover:bg-indigo-700 flex items-center"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </nav> */}

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 *:bg-zinc-800">
            <motion.div
              className=" overflow-hidden shadow rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <ChartBarIcon className="h-6 w-6 " />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium truncate">
                        Total Posts
                      </dt>
                      <dd className="text-3xl font-semibold ">
                        {stats.totalPosts}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" overflow-hidden shadow rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <UserGroupIcon className="h-6 w-6 " />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium truncate">
                        Total Likes
                      </dt>
                      <dd className="text-3xl font-semibold ">
                        {stats.totalLikes}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" overflow-hidden shadow rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                    <CogIcon className="h-6 w-6 " />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium truncate">
                        Total Comments
                      </dt>
                      <dd className="text-3xl font-semibold ">
                        {stats.totalComments}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className=" shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 mb-2 font-medium ">
                Your Recent Posts
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Create New Post
              </motion.button>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map((post, index) => (
                <motion.li
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {post.title}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {post.createdAt}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm sm:mt-0">
                        <p className="mr-4">{post.likes} Likes</p>
                        <p className="mr-4">{post.comments} Comments</p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
