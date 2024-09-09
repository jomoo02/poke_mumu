import React from 'react';
import useMethodMovesTitle from '../../hooks/useMethodMovesTitle';

export default function MethodMovesTitle({ method }) {
  const { title } = useMethodMovesTitle(method);

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
      {title}
    </h3>
  );
}
