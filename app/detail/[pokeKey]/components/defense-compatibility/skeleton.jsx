import React from 'react';
import HeaderSkeleton from '../header-skeleton';

export default function DefenseCompatibilitySkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
      <div className="border-2 border-t-0 border-slate-200">
        <div className="h-[34px] xs:h-[35px] md:h-[39px] bg-slate-100 border-b-2 border-slate-200" />

        <div className="h-[144px] bg-slate-100" />
      </div>
    </div>
  );
}
