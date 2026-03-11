import Logo from '@/Components/layouts/Logo';
import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">


      <div className="relative flex items-center justify-center">
        <span className="absolute w-28 h-28 rounded-full bg-blue-400 opacity-30 animate-ping"></span>

        <div className="animate-pulse z-10">
          <Logo />
        </div>
      </div>

    
      <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
        Loading...
      </h2>

    </div>
  );
};

export default Loading;