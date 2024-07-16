"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import api from "@/utils/api";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

const BlogManagement: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [user?.userId]);

  const fetchPosts = async () => {
    try {
      const response = await api.get(`/posts/author/${user?.userId}`);
      setPosts(response.data.posts);
    } catch (err) {
        console.error(err);
    }
  };

  const handleDelete = async (postId: string) => {
    try {
      await api.delete(`/posts/${postId}`);
      fetchPosts(); // Refresh the list
    } catch (err) {
      setError("Failed to delete post. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Your Blog Posts</h1>
      <Link
        href="/blogs/new"
        className="mb-4 inline-block py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Create New Post
      </Link>
      {posts?.map((post) => (
        <div key={post._id} className="border p-4 rounded-md mb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.description}</p>
          <p className="text-sm text-gray-500">
            Created: {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <div className="mt-2">
            <Link
              href={`/blogs/${post._id}/edit`}
              className="mr-2 py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(post._id)}
              className="py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default BlogManagement;
