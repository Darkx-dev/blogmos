"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
const UserMenu = () => {
  const { user, logout } = useAuth();
  if (!user)
    return (
      <div className="space-x-5 max-md:space-x-2 flex items-center">
        <Link href="/register">
          <button
            className="align-middle select-none font-medium  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 max-md:py-2 max-md:px-4 px-6 border-2 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
            type="button"
          >
            Login
          </button>
        </Link>
        <button
          className="align-middle select-none font-medium  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 max-md:py-2 max-md:px-4 bg-gradient-to-tr from-blue-900 to-cyan-800 shadow-md dark:shadow-gray-900/10 hover:shadow-lg text-white hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
          type="button"
        >
          Register
        </button>
        <ThemeSwitch />
      </div>
    );
  if (user)
    return (
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content: "p-0 border-small border-divider",
        }}
      >
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "",
            }}
            className="transition-transform"
            // description="@tonyreichert"
            name={user.username}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          disabledKeys={["profile"]}
          className="p-3 dark:bg-zinc-800/95 bg-zinc-600 rounded-lg text-white"
          itemClasses={{
            base: [
              "rounded-md",
              "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            {/* <DropdownItem key="dashboard">Dashboard</DropdownItem> */}
            {/* <DropdownItem key="settings">Settings</DropdownItem> */}
            <DropdownItem key="new_project" endContent={""}>
              <Link href={"/posts/new"}>New Post</Link>
            </DropdownItem>
            <DropdownItem key="home" endContent={""}>
              <Link href={"/"}>Home</Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="Help & Feedback">
            {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
            <DropdownItem
              href="/api/auth/logout"
              onClick={logout}
              key="logout"
              className="text-red-500"
            >
              Log Out
            </DropdownItem>
            <DropdownItem key="theme-switch">
              <ThemeSwitch />
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    );
};

export default UserMenu;
