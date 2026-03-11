"use client";

import React from "react";
import { MdErrorOutline } from "react-icons/md";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">

     
      <MdErrorOutline className="text-red-500 text-8xl mb-4 animate-pulse" />

  
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Something went wrong
      </h1>

  
      <p className="text-gray-600 max-w-md mb-6">
        An unexpected error occurred. Please try again or go back to the homepage.
      </p>

    
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Try Again
        </button>

        <a
          href="/"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          Go Home
        </a>
      </div>

    </div>
  );
};

export default Error;