import React from 'react';
import { useMethod } from './method-move.context';
import useMethodMovesTitle from '../hooks/useMethodMovesTilte';

export default function Title() {
  const method = useMethod();

  const { title } = useMethodMovesTitle(method);

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
      {title}
    </h3>
  );
}
