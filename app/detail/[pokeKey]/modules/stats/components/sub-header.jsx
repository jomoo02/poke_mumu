'use client';

import React from 'react';
import useSubHeader from '../hooks/useSubHeader';

export default function SubHeader({ type }) {
  const { baseText, effortText } = useSubHeader();

  return (
    <div className={
      `${type} grid grid-cols-5 py-[3px] md:py-1.5 gap-x-1 sm:gap-x-3 text-sm text-center text-white font-semibold items-center capitalize border-t border-[#fafaf9]`
      }
    >
      <div />
      <div className="col-span-3">
        {baseText}
      </div>
      <div>
        {effortText}
      </div>
    </div>
  );
}
