'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import Search from '@/app/ui/search-v2/search';

export default function Modal() {
  return createPortal(
    <div className="backdrop-blur-sm z-[5000] top-0 left-0 fixed w-screen h-screen flex justify-center lg:items-center">
      <div className="w-full h-full lg:w-3/5 lg:h-[550px]">
        <Search />
      </div>
    </div>,
    document.getElementById('modal'),
  );
}
