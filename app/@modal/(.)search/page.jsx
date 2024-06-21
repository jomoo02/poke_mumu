import React from 'react';
import Search from '@/app/ui/search-v2/search';

export default function Page() {
  return (
    <div
      className="backdrop-blur-sm bg-gray-200/30
      z-20 top-0 left-0 absolute
      w-screen h-screen flex justify-center lg:items-center"
    >
      <div className="w-full h-full lg:w-3/5 lg:h-[550px]">
        <Search />
      </div>
    </div>
  );
}
