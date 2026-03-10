import React from "react";

const Productsskeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm animate-pulse overflow-hidden border"
          >
            <div className="h-56 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded w-full mt-2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Productsskeleton;