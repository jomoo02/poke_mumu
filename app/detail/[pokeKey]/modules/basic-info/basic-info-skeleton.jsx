import React from 'react';
import Image from 'next/image';
import HeaderSkeleton from '../../components/header-skeleton';

function IamgeSkeleton() {
  return (
    <div className="flex justify-center items-center py-3 md:py-0">
      <Image
        src="/pokeball.svg"
        alt="poke"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

function TitleNameSkeleton() {
  return (
    <div className="mb-2 sm:mb-4 w-32 h-7 bg-slate-200 rounded-md" />
  );
}

function InfoSkeleton() {
  return (
    <div className="flex gap-x-5 md:gap-x-10 py-1 min-w-72 min-h-[35px] border-b">
      <div className="w-24 h-5" />
      <div className="bg-slate-200 h-6" />
    </div>
  );
}

export default function BasicInfoSkeleton() {
  return (
    <div className="animate-pulse">
      <TitleNameSkeleton />
      <HeaderSkeleton />
      <div className="border-2 border-t-0 md:py-3 md:flex md:justify-evenly">
        <IamgeSkeleton />
        <div className="px-2 pb-1 md:pb-0 flex flex-col justify-center">
          <InfoSkeleton />
          <InfoSkeleton />
          <InfoSkeleton />
          <InfoSkeleton />
          <InfoSkeleton />
          <InfoSkeleton />
        </div>
      </div>
    </div>
  );
}
