import Nav from "@/components/Navbar/Nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default layout;
