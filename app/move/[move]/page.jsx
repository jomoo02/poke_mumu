import React from 'react';

export default function Main({ params }) {
  const move = params?.move;

  return (
    <div>
      {move}
    </div>
  );
}
