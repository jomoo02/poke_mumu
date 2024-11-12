import React from 'react';
import HeaderSkeleton from '../../components/header-skeleton';

function TitleNameSkeleton() {
  return (
    <div className="mb-2 sm:mb-4 w-32 h-7 bg-slate-200 rounded-md" />
  );
}

export default function InformationSkeleton() {
  return (
    <div className="animate-pulse">
      <TitleNameSkeleton />
      <HeaderSkeleton />
      <div className="border-2 border-t-0 grid xl:grid-cols-3 items-center bg-slate-100">
        <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4 min-h-[1000px] xl:min-h-[500px]" />
      </div>
    </div>
  );
}
