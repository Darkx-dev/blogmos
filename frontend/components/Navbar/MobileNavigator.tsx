"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileNavigator = ({
  isOpen,
  handleSideBar,
}: {
  isOpen: boolean;
  handleSideBar: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "keyframes", stiffness: 300, damping: 30 }}
          className="fixed left-0 bottom-0 h-[calc(100vh-55px)] text-2xl  font-semibold  w-screen z-30 flex items-end backdrop-blur-sm lg:hidden"
        >
          <div className="w-full h-full bg-zinc-900/90 text-white p-4">
            <nav className="flex flex-col items-center mt-10 space-y-4 hover:*:bg-white hover:*:text-black *:px-4 *:rounded-lg transition-all">
              <Link href="/" onClick={handleSideBar}>
                Home
              </Link>
              <Link href="/" onClick={handleSideBar}>
                Blogs
              </Link>
              {/* Add more links as needed */}
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigator;
