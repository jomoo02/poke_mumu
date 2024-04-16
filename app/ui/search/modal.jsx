import React, { useEffect } from 'react';
import SearchMobile from './search-mobile';

export default function Modal({ closeModal }) {
  const htmlOverflowClass = 'overflow-y-hidden';

  useEffect(() => {
    const htmlTag = document.querySelector('body');
    htmlTag.classList.add(htmlOverflowClass);

    return () => {
      htmlTag.classList.remove(htmlOverflowClass);
    };
  }, []);

  return (
    <div className="backdrop-blur-sm bg-gray-200/30 z-20 fixed inset-0 w-screen min-h-screen">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <div className="flex-1">
            <button onClick={closeModal} type="button">
              close
            </button>
            <SearchMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
