import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const Nav = () => {
  return (
    <Navbar shouldHideOnScroll className="w-full dark:bg-zinc-500/10 bg-black/60 text-white rounded-b-lg">
      <NavbarContent className="w-full justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="navbar-start">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl font-bold" href="/">
                Blogmos
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>More</summary>
                  <ul className="p-2 *:*:text-nowrap">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-1">
            <UserMenu />
            <ThemeSwitch />
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
