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
      className={`w-full relative overflow-hidden sm:max-h-[25em] max-h-[20em] bg-gray-700/10 rounded-lg shadow-lg dark:bg-zinc-800 transform transition-all duration-300 hover:scale-105 ${
        idx % 3 === 0 ? "md:col-span-3" : "md:col-span-2"
      }`}
    >
      <div className="h-fit md:min-h-72  h-full overflow-hidden">
        <Image
          className="rounded object-cover w-full h-full min-h-72 transition-transform duration-300 hover:scale-110"
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
            <span
              // href={`/profile/${authorId}`}
              className="ml-2 text-sm font-medium text-white hover:underline"
            >
              {author}
            </span>
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

export default Card;
