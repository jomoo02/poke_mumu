import React from 'react';

export default function Header({ children }) {
  return (
    <div className={`grid gap-x-1 md:gap-x-2 ${children ? 'grid-cols-7' : 'grid-cols-6'} border-b text-xs md:text-base items-center h-9`}>
      {children}
      <div className="col-span-2">이름</div>
      <div className="text-center">타입</div>
      <div className="text-center">분류</div>
      <div className="text-center">위력</div>
      <div className="text-center">명중률</div>
    </div>
  );
}
