import PaginationProvider from "@/context/PaginateContext";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <PaginationProvider>{children}</PaginationProvider>;
};

export default layout;
