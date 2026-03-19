import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center py-10 animate-pulse">
      <div className="w-11/12 max-w-7xl space-y-6">

        <div className="h-8 w-60 bg-gray-200 rounded"></div>

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl border"
          >
            <div className="w-28 h-28 bg-gray-200 rounded-xl"></div>

            <div className="flex-1 space-y-3 w-full">
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="h-5 w-16 bg-gray-200 rounded"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-8">
          <div className="h-6 w-40 bg-gray-200 rounded"></div>
          <div className="h-12 w-32 bg-gray-200 rounded-xl"></div>
        </div>

      </div>
    </div>
  );
};

export default Loading;