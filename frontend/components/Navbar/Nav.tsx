"use client";
import { Navbar, NavbarContent } from "@nextui-org/react";
import UserMenu from "./UserMenu";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import MobileNavigator from "./MobileNavigator";
import React, { useState } from "react";
import { IconCross, IconCurrencyXrp, IconMenu3 } from "@tabler/icons-react";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="w-full pattern-nav dark:bg-zinc-500/10 bg-black/60 text-white rounded-b-lg max-sm:*:first:px-2 shadow-md"
      >
        <NavbarContent className="w-full justify-between">
          <div className="flex justify-between items-center w-full">
            <div className="navbar-start flex items-center gap-2">
              <button onClick={handleSideBar} className="lg:hidden z-50">
                {isSidebarOpen ? <IconCurrencyXrp /> : <IconMenu3 />}
              </button>
              <div className="flex-1">
                <a className="btn btn-ghost text-xl font-bold" href="/">
                  Blogmos
                </a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex items-center gap-2 hover:*:bg-white/10 *:py-2 *:px-4 *:rounded-lg *:cursor-pointer *:transition-colors">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex items-center gap-4 max-sm:gap-1">
              <ThemeSwitch />
              <UserMenu />
            </div>
          </div>
        </NavbarContent>
      </Navbar>
      <MobileNavigator isOpen={isSidebarOpen} handleSideBar={handleSideBar} />
    </>
  );
};

export default Nav;
