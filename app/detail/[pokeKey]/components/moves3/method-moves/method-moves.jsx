import React from 'react';
import { MethodMovesProvider } from './method-move.context';

export default function MethodMoveContainer({ method, children }) {
  return (
    <MethodMovesProvider method={method}>
      <div className="flex w-[600px]">
        {children}
      </div>
    </MethodMovesProvider>
  );
}
