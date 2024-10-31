import React from 'react';
import ArrowRightIcon from '@/app/components/icons/arrow-right';
import ArrowLeftIcon from '@/app/components/icons/arrow-left';

function Before() {
  return (
    <div className="flex border-2 rounded-lg items-center h-14 md:h-16 flex-row bg-slate-100">
      <div className="h-full flex items-center justify-center px-4 border-r">
        <ArrowLeftIcon />
      </div>
    </div>
  );
}

function Next() {
  return (
    <div className="flex border-2 rounded-lg items-center h-14 md:h-16 flex-row-reverse bg-slate-100">
      <div className="h-full flex items-center justify-center px-4 border-l">
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default function NavigationSkeleton({ pokeKey }: { pokeKey: string }) {
  const start = 'bulbasaur';
  const end = 'pecharunt';

  const isViewLeft = pokeKey !== start;
  const isViewRight = pokeKey !== end;

  return (
    <div className="grid gap-y-3 md:flex-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 lg:gap-x-20 xl:gap-x-0 animate-pulse">
      {isViewLeft && <Before />}
      <div className="md:col-start-2 xl:col-span-1 lg:col-start-3 xl:col-start-4">
        {isViewRight && <Next />}
      </div>
    </div>
  );
}
