import React from 'react';

function HeaderSkeleton() {
  const title = '특성';

  return (
    <div className="rounded-t-md bg-slate-300">
      <h2
        className="text-slate-300 text-center font-semibold py-[3px] md:py-1.5 text-sm capitalize"
      >
        {title}
      </h2>
    </div>
  );
}

function AbilitySkeleton() {
  return (
    <div className="grid grid-cols-9 bg-slate-100 gap-x-1 min-h-12">
      <div className="col-span-2 border-r text-center py-0.5 px-1 text-sm md:text-[15px] flex flex-col items-center justify-center" />
      <div className="col-span-7 text-pretty text-sm md:text-[15px] p-1.5 md:px-3 flex items-center" />
    </div>
  );
}

export default function AbilitiesSkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
      <div className="grid divide-y border-2 border-t-0 rounded-b-sm">
        <AbilitySkeleton />
        <AbilitySkeleton />
        <AbilitySkeleton />
      </div>
    </div>
  );
}
