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
      <div className="*:px-2 *:py-1 first:*:bg-cyan-400 last:*:bg-red-500 space-x-2 *:rounded-lg">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    );
  if (user)
    return (
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content:
            "p-0 border-small border-divider bg-black rounded-xl dark:shadow-[#ffffff1b] shadow-md",
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
          className="p-3 dark:bg-black text-white"
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
            <DropdownItem key="new_project" endContent={""} href="/posts/new">
              New Post
            </DropdownItem>
            <DropdownItem key="home" endContent={""} href="/">
              Home
            </DropdownItem>
          </DropdownSection>

          {/* <DropdownSection aria-label="Preferences" showDivider>
            <DropdownItem key="quick_search" shortcut="⌘K">
              Quick search
            </DropdownItem>
          </DropdownSection> */}

          <DropdownSection aria-label="Help & Feedback">
            {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
            <DropdownItem href="/api/auth/logout" onClick={logout} key="logout">
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
