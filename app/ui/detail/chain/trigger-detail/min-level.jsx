import React from 'react';

export default function MinLevelCase({ value }) {
  return (
    <div className="flex gap-x-1 text-sm justify-center items-center">
      <span>Level</span>
      <span>{value}</span>
    </div>
  );
}
