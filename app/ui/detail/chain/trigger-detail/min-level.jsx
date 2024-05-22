import React from 'react';

export default function MinLevelCase({ level }) {
  return (
    <div className="flex gap-x-1 text-sm justify-center items-center">
      <span>Level</span>
      <span>{level}</span>
    </div>
  );
}
