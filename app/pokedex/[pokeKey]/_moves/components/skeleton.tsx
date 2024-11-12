import React from 'react';
import HeaderSkeleton from '../../components/header-skeleton';

export default function MovesSkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
      <div className="border-2 border-t-0">
        <div className="border-b-2 h-[50px] bg-slate-100" />
        <div className="border-b-2 h-[46px] bg-slate-100" />
        <div className="h-96 bg-slate-100" />
      </div>
    </div>
  );
}
