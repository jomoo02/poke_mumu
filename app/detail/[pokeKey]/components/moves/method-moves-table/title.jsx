import React from 'react';
import useTableTitle from '../hooks/useTableTitle';

export default function MethodTitle({ method }) {
  const { title } = useTableTitle(method);

  return (
    <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
      {title}
    </h3>
  );
}
