import React from "react";

const Productsdetelsskeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-200 rounded-xl h-[420px] w-full"></div>

        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2"></div>

          <div className="h-6 bg-gray-200 rounded w-1/3"></div>

          <div className="flex gap-3">
            <div className="h-8 bg-gray-200 rounded w-28"></div>
            <div className="h-8 bg-gray-200 rounded w-20"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          <div className="h-12 bg-gray-200 rounded w-40"></div>
        </div>
      </div>

      <div className="mt-14 space-y-4">
        <div className="h-7 bg-gray-200 rounded w-1/3"></div>

        <div className="bg-gray-200 h-16 rounded"></div>
        <div className="bg-gray-200 h-16 rounded"></div>
        <div className="bg-gray-200 h-16 rounded"></div>
      </div>
    </div>
  );
};

export default Productsdetelsskeleton;