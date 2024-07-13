"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { trimString } from "@/utils/methods";
import ShareButton from "./ShareButton";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  imgSrc?: string;
  author?: string;
  authorId?: string;
  postId?: string;
  createdAt?: Date;
  idx: number;
}

const Card = ({
  title,
  description,
  imgSrc,
  author,
  authorId,
  postId,
  createdAt,
  idx,
}: CardProps) => {
  if (!title) return <Skeleton />;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: idx * 0.1 }}
      className={`w-full relative overflow-hidden bg-gray-700/10 rounded-lg shadow-lg dark:bg-zinc-800 transform transition-all duration-300 hover:scale-105 ${
        idx % 3 === 0 ? "md:col-span-3" : "md:col-span-2"
      }`}
    >
      <div className="h-fit md:min-h-72 overflow-hidden">
        <Image
          className="rounded object-cover w-full min-h-72 transition-transform duration-300 hover:scale-110"
          src={imgSrc || "/default-cover.png"}
          alt={title}
          sizes="150"
          width={0}
          height={0}
          priority
        />
      </div>
      <div className="p-4 absolute left-0 bottom-0 backdrop-blur w-full">
        <div>
          <Link
            href={`/blogs/${postId}`}
            className="block text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-200"
          >
            {trimString(title, 70)}
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            {trimString(description, 80) || "No description"}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Image
              className="object-cover h-8 w-8 rounded-full"
              src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg"
              alt="Avatar"
              width={32}
              height={32}
              priority={false}
            />
            <Link
              href={`/profile/${authorId}`}
              className="ml-2 text-sm font-medium text-white hover:underline"
            >
              {author}
            </Link>
          </div>
          <span className="text-xs text-gray-400">
            {moment(createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <ShareButton url={`posts/${postId}`} title={title} text={description} />
      </div>
    </motion.div>
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
