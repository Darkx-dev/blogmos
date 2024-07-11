import React from "react";

const loading = () => {
  return (
    <div className="px-4 md:px-32 min-h-screen pb-10">
      <section id="new-posts" className="mt-5">
        <h1 className="border-l-4 border-pink-500 pl-1">Recent posts</h1>
        <hr className="my-2" />
        <div className="grid justify-center md:grid-cols-2 gap-5 auto-cols-[100%] auto-rows-[25rem] ">
          <div className="animate-pulse">
            <div className="flex w-full flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2">
              <div className="p-2 sm:w-1/2">
                <div className="bg-gray-200 rounded h-80 w-full"></div>
              </div>
              <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="sm:mt-2 text-2xl font-semibold  hover:text-gray-600 hover:underline h-6 w-full bg-gray-200 rounded"></div>
                  <div className="mt-2 text-sm  h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full h-10 w-10"></div>
                      <div className="mx-2 font-semibold  h-4 w-10 bg-gray-200 rounded"></div>
                    </div>
                    <div className="mx-1 text-xs h-4 w-10 bg-gray-200 rounded"></div>
                    <div className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300 h-4 w-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="flex w-full flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2">
              <div className="p-2 sm:w-1/2">
                <div className="bg-gray-200 rounded h-80 w-full"></div>
              </div>
              <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="sm:mt-2 text-2xl font-semibold  hover:text-gray-600 hover:underline h-6 w-full bg-gray-200 rounded"></div>
                  <div className="mt-2 text-sm  h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full h-10 w-10"></div>
                      <div className="mx-2 font-semibold  h-4 w-10 bg-gray-200 rounded"></div>
                    </div>
                    <div className="mx-1 text-xs h-4 w-10 bg-gray-200 rounded"></div>
                    <div className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300 h-4 w-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default loading;
