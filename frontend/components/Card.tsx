"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { postTypes } from "@/types/models";
import moment from "moment";

const Card = ({
  title,
  description,
  imgSrc,
  author,
  authorId,
  postId,
  createdAt,
}: {
  title: string;
  description: string;
  imgSrc?: string;
  author?: string;
  authorId?: string;
  postId?: string;
  createdAt?: Date;
}) => {
  const handleShare = () => {
    if (global.navigator) {
      global.navigator.clipboard.writeText(`${window.location}posts/${postId}`);
      alert("Link copied to clipboard!");
    }
  };
  if (!title) return <Skeleton />;
  return (
    <div className="flex w-full flex-col items-center font-mono sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700/10 rounded-lg shadow-lg dark:bg-gray-800 p-2">
      {imgSrc ? (
        <div className="p-2 sm:w-1/2 h-full">
          <Image
            className="rounded object-cover w-full h-full"
            src={`${imgSrc || '/default-cover.png' }`}
            alt="Article"
            sizes="200"
            width={20}
            height={20}
          />
        </div>
      ) : (
        <div className="p-2 sm:w-1/2">
          <div className="sm:h-80 h-60 w-full bg-gray-500/20 rounded-lg animate-pulse "></div>
        </div>
      )}
      <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
        <div>
          <Link
            href={`/posts/${postId}`}
            className="block sm:mt-2 text-2xl font-semibold capitalize hover:text-gray-600 hover:underline"
          >
            {title}
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            {description || "No description"}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                className="object-cover h-10 w-10 rounded-full"
                src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg"
                alt="Avatar"
                width={20}
                height={20}
                sizes="200"
              />
              <Link
                href={`/profile/${authorId}`}
                className="mx-2 font-semibold"
              >
                {author}
              </Link>
            </div>
            <span className="mx-1 text-xs">
              {moment(createdAt).format("MMM DD, YYYY")}
            </span>
            <span
              className="hover:cursor-pointer relative sm:left-12 text-xs"
              onClick={handleShare}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f2f2f2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex w-full flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <div className="p-2 sm:w-1/2">
          <div className="bg-gray-200 rounded h-80 w-full"></div>
        </div>
        <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
          <div>
            <div className="sm:mt-2 text-2xl font-semibold  hover:text-gray-600 hover:underline h-6 w-full bg-gray-200 rounded"></div>
            <div className="mt-2 text-sm  h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10"></div>
                <div className="mx-2 font-semibold  h-4 w-10 bg-gray-200 rounded"></div>
              </div>
              <div className="mx-1 text-xs h-4 w-10 bg-gray-200 rounded"></div>
              <div className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300 h-4 w-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
