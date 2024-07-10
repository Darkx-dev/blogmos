import React from 'react'

const loading = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-pulse">
    <article className="shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
          <div>
            <p className="h-4 bg-gray-200 rounded w-1/2"></p>
            <p className="h-4 bg-gray-200 rounded w-1/4 mt-1"></p>
          </div>
        </div>
        <div className="prose max-w-none">
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/5"></div>
        </div>
      </div>
    </article>
  </div>
  )
}

export default loading