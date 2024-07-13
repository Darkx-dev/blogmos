"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";
const UserMenu = () => {
  const { user, logout } = useAuth();
  if (!user)
    return (
      <div className="space-x-5 max-md:space-x-2 flex items-center">
        <Link href="/login">
          <button className="smky-btn relative py-2 px-6 max-sm:px-2 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-10 w-40 max-md:w-32 max-sm:w-24 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">Register</p>
          </button>
        </Link>
      </div>
    );
  if (user)
    return (
      <div className="dropdown relative dropdown-end">
        <label
          tabIndex={0}
          role="button"
          htmlFor="dropdown-toggle"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-fit border-2 rounded-full overflow-hidden">
            <Image
              alt="Tailwind CSS Navbar component"
              src={
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXh1enhwNm1vZGxjMGljZ2dlNjhtd2tnMmE5MHRmZTU2OWNrcTE1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.webp"
              }
              width={30}
              height={30}
            />
          </div>
        </label>

        <input type="checkbox" className="peer" id="dropdown-toggle" hidden />
        <ul
          tabIndex={0}
          className="menu menu-sm dark:bg-zinc-800/50 bg-black/90 text-white min-w-40 dropdown-content translate-y-2 right-2 bg-base-100 hidden peer-checked:flex flex-col gap-2 absolute rounded-lg rounded-b-lg z-[1] mt-3 p-3 shadow"
        >
          <li className="*:block">
            <span className="text-xs">Welcome</span>
            <span className="text-yellow-400">@{user.username}</span>
          </li>
          <hr />
          <li>
            <Link
              className="justify-between"
              href={`/blogs/profile${user.userId}`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link href="/blogs/new">New post</Link>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <button
              onClick={logout}
              className="group mx-auto flex items-center justify-center gap-5 rounded-lg w-full h-11 bg-red-600"
            >
              <div className="flex items-center justify-center w-fit ">
                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="">Logout</div>
            </button>
          </li>
        </ul>
      </div>
    );
};

export default UserMenu;
