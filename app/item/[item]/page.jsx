import React from 'react';

export default function Main({ params }) {
  const item = params?.item;

  return (
    <div>
      {item}
    </div>
  );
}
