/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import Image from "next/image";
import React from "react";

interface MediumCardProps {
  orientation: string;
  title?: string;
  content?: string;
  tags?: string[];
  author?: {
    _id?: string;
    username?: string;
  };
  createdAt?: Date
}

const MediumCard: React.FC<MediumCardProps> = ({
  orientation = "p",
  title,
  content,
  tags,
  author,
  createdAt
}) => {
 
  return (
    <div
      className={`flex ${
        orientation === "p" ? "flex-col" : undefined
      } items-center rounded-lg shadow-sm shadow-gray-600`}
    >
      <a href="#" className="p-2 h-full w-full">
        <img
          className="h-full rounded-lg object-cover"
          src="https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635406.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-md:hidden">
          {content}
        </p>
        <div className="gap-5 rounded-lg px-2 py-[5px] shadow-inner shadow-[#ffffff10] dark:bg-[#ffffff5] max-md:hidden">
          <a href="#">
            <img src="/profile.png" alt="" width={40} className="rounded-lg" />
          </a>
          <div>
            <h5>{author?.username}</h5>
            <p className="text-sm text-zinc-500">{moment(createdAt).format('YYYY-MM-DD')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
