import React from 'react';
import HeaderSkeleton from '../header-skeleton';

export default function StatsSkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
      <div className="h-[27px] md:h-[33px] border-t border-[#fafaf9] bg-slate-300" />
      <div className="grid border-2 border-t-0 border-slate-200 divide-y rounded-b-sm">
        <div className="h-[30px] bg-slate-100" />
        <div className="h-[30px] bg-slate-100" />
        <div className="h-[30px] bg-slate-100" />
        <div className="h-[30px] bg-slate-100" />
        <div className="h-[30px] bg-slate-100" />
        <div className="h-[30px] bg-slate-100" />
        <div className="h-[30px] bg-slate-100" />
      </div>
    </div>
  );
}
