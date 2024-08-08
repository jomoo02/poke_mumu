import React from 'react';
import Image from 'next/image';

function HeaderSkeleton() {
  const title = '특성';

  return (
    <div className="rounded-t-md bg-slate-300">
      <h2
        className="text-slate-300 text-center font-semibold py-[3px] md:py-1.5 text-sm capitalize"
      >
        {title}
      </h2>
    </div>
  );
}

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

function InfoSkeleton({ order }) {
  const containerBorder = order === 'first' ? 'border-y' : 'border-b';

  return (
    <div className={`flex gap-x-5 md:gap-x-10 py-1 min-w-72 min-h-[35px] ${containerBorder}`}>
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
          <InfoSkeleton order="first" />
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
