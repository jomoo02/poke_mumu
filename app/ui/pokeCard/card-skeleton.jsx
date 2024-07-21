import React from 'react';
import Image from 'next/image';

export default function PokeCardSkeleton() {
  return (
    <div
      className="border-2 animate-pulse rounded-md border-slate-400 w-full min-h-[6.75rem] h-[6.75rem] sm:h-56 px-2 py-1.5 sm:p-3 flex sm:flex-col"
    >
      <div className="w-1/2 sm:w-full">
        <div className="h-5 flex items-center py-0.5 bg-slate-200 w-1/3 rounded bg-clip-content" />

        <div className="flex sm:my-1 pr-4 sm:pr-0 justify-center">
          <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 relative">
            <Image
              src="/pokeball.svg"
              alt="pokeball"
              fill
              sizes="80px"
              style={{
                objectFit: 'contain',
              }}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <div className="flex h-6 items-center rounded w-1/2 bg-slate-200 bg-clip-content py-1" />
          <div className="flex h-4 items-center rounded w-1/3 bg-slate-200 bg-clip-content py-0.5" />
        </div>
        <div className="grid grid-cols-2 gap-x-1 xs:gap-x-2 sm:gap-x-3">
          <div
            className="w-full px-px rounded-[5px] bg-slate-200 h-[22px] xs:h-[23px]"
          />
          <div
            className="w-full px-px rounded-[5px] bg-slate-200 h-[22px] xs:h-[23px]"
          />
        </div>
      </div>
    </div>
  );
}
