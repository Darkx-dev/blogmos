export interface PagingContextType {
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
    handlePageChange: (page: number) => void;
  }