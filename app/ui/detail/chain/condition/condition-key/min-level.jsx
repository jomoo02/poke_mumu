import React from 'react';

export default function MinLevelCase({ value }) {
  return (
    <>
      <span className="mr-1">Level</span>
      <span>{value}</span>
    </>
  );
}
