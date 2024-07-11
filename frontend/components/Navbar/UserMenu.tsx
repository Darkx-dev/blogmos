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
          <button
            className="align-middle select-none font-medium  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 max-md:py-2 max-md:px-4 px-6 border-2 border-black dark:border-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
            type="button"
          >
            Login
          </button>
        </Link>
        <Link href="/register">
          <button
            className="align-middle select-none font-medium  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 max-md:py-2 max-md:px-4 bg-gradient-to-tr from-blue-900 to-cyan-800 shadow-md dark:shadow-gray-900/10 hover:shadow-lg text-white hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
            type="button"
          >
            Register
          </button>
        </Link>
      </div>
    );
  if (user)
    return (
      <div className="dropdown dropdown-end">
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
          className="menu menu-sm dropdown-content translate-y-2 right-2 bg-base-100 hidden peer-checked:flex flex-col gap-2 absolute bg-black/50 text-white rounded-lg rounded-box z-[1] mt-3 w-52 p-3 shadow"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
};

export default UserMenu;
