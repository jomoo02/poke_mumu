import React from 'react';
import HeaderSkeleton from '../header-skeleton';

export default function FormsSkeleton() {
  return (
    <>
      <HeaderSkeleton />
      <div className="h-[126px] bg-slate-100 border-2 border-t-0" />
    </>
  );
}