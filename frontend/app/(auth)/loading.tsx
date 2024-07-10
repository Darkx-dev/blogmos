import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </div>
          Blogmos
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/20 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="p-6 pt-0">
            <form>
              <div>
                <div>
                  <div className="group relative rounded-lg border animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <input
                      type="text"
                      name="username"
                      className="block w-full h-6 bg-gray-200 rounded mt-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 animate-pulse">
                <div>
                  <div className="relative rounded-lg border px-3 h-10"></div>
                </div>
              </div>
              <div className="mt-4 animate-pulse">
                <div>
                  <div className="relative rounded-lg border px-3 h-10"></div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-x-2 animate-pulse">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 duration-200 bg-gray-200"></div>
                <div className="font-semibold transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-black h-10 px-4 py-2"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
