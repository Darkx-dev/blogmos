import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import User from "./UserMenu";
import Search from "./Search";

const Navbar = () => {

  return (
    <nav className="flex justify-between px-32 py-5 max-md:px-4">
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold text-orange-500" id="company">
          WEB.sol
        </div>
        <ul
          className="flex max-lg:hidden items-center *:flex *:cursor-pointer *:items-center *:gap-1 *:rounded-lg *:px-5 *:py-2 *:transition-colors dark:hover:*:bg-[#ffffff25]"
          id="routes"
        >

          <li id="home">
            <Link href='/home'>Home</Link>
          </li>
          <li id="categories">
            Categories
            <i className="icon-chevron-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          </li>
          <li id="pages">
            Pages
            <i className="icon-chevron-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <Search />
        <User />
        <ThemeSwitch/>
      </div>
    </nav>
  );
};

export default Navbar;
