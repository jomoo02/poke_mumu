import React from 'react';
import HeaderSkeleton from '../../components/header-skeleton';

export default function StatsSkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
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
