import React from 'react';
import HeaderSkeleton from '../../components/header-skeleton';

export default function FormsSkeleton() {
  return (
    <div className="animate-pulse">
      <HeaderSkeleton />
      <div className="h-[126px] bg-slate-100 border-2 border-t-0" />
    </div>
  );
}
