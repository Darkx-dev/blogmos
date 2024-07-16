"use client";
import React from "react";

const Custom500 = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">Seems like you are lost</h1>
      <p className="mt-5 text-gray-500">
        {"We couldn't find the page you're looking for."}
      </p>
      <a href="/" className="mt-5 text-blue-500">
        Go back to the home page
      </a>
    </div>
  );
};

export default Custom500;
