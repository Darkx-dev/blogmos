"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const handleNextClick = () => {
  // Todo: Logic here to navigate to the next page
};

const handlePreviousClick = () => {
  // Todo: Logic here to navigate to the previous page
};

interface PaginatorProps {
  totalPages: number;
  currentPage: number;
  limit: number;
}

const Paginator = ({ totalPages, currentPage, limit }: PaginatorProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 backdrop-blur-sm">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">{limit}</span> of{" "}
            <span className="font-medium">{totalPages}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
           
            
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              1
            </a>
            <button
              onClick={handleNextClick}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
