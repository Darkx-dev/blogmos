"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const UserMenu = () => {
  const { user } = useAuth()
  if (user)
    return (
      <div className="flex items-center gap-2" id="logged-user">
        <div className="user-pfp h-[40px] w-[40px] rounded-xl bg-[#00000025]">
          {user?.image && (
            <Image
              src={`data:image/jpeg;base64,${user?.image}`}
              alt="User's Profile Picture"
              width={40}
              height={40}
              className="rounded-xl"
            />
          )}
        </div>
        <label
          className="relative flex cursor-pointer items-center gap-1"
          id="dropdown-toggle"
        >
          {user?.username}
          <i className="icon-chevron-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </i>
          <input type="checkbox" id="dropdown-toggle" className="peer hidden" />
          <div className="absolute right-0 top-10 hidden w-40 flex-col rounded-lg bg-[#ffffff20] px-5 py-2 peer-checked:flex">
            <Link href="/profile/[id]" as={`/profile/${user?._id}`}>
              Profile
            </Link>
            <a className="text-red-500" href="/api/auth/logout">
              Log out
            </a>
          </div>
        </label>
      </div>
    );
};

export default UserMenu;
