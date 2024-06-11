import React from 'react';

export default function TitleHeader({ type, title }) {
  return (
    <div className={`${type} rounded-t-md`}>
      <h2
        className="text-white text-center font-semibold py-[3px] md:py-1.5 text-sm capitalize"
      >
        {title}
      </h2>
    </div>
  );
}
