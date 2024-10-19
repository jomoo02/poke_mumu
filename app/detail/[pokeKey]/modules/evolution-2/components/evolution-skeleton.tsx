import React from 'react';
import HeaderSkeleton from '../../../components/header-skeleton';

export default function EvolutionSkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
      <div className="border-2 border-t-0 border-slate-200 h-[670px] bg-slate-100 md:h-[340px]" />
    </div>
  );
}
