"use client";
import { Pagination } from "@nextui-org/pagination";
import React, { ReactNode, useState } from "react";
import { PagingContextType } from "@/types/paging";

const PaginateContext = React.createContext<PagingContextType | undefined>(
  undefined
);

const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginateContext.Provider
      value={{
        currentPage,
        totalPages,
        setCurrentPage,
        setTotalPages,
        handlePageChange,
      }}
    >
      {children}
      <Pagination
        showControls
        initialPage={currentPage}
        total={totalPages}
        onChange={handlePageChange}
        className="flex justify-center grayscale"
      />
    </PaginateContext.Provider>
  );
};

export const usePaginate = () => {
  const context = React.useContext(PaginateContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an Paginate Provider");
  }
  return context;
};

export default PaginationProvider;
