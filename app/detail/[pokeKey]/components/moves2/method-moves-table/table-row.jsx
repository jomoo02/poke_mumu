import React from 'react';

function OneColumn({ renderFn, className }) {
  return (
    <div className={className}>
      {renderFn && renderFn()}
    </div>
  );
}

export default function TableRow({
  renderColumn1,
  renderColumn2,
  renderColumn3,
  renderColumn4,
  renderColumn5,
  renderColumn6,
  className,
}) {
  return (
    <div className={`flex h-9 items-center ${className}`}>
      <OneColumn renderFn={renderColumn1} />
      <OneColumn renderFn={renderColumn2} className="w-[10.5rem]" />
      <OneColumn renderFn={renderColumn3} className="w-[5.25rem]" />
      <OneColumn renderFn={renderColumn4} className="w-[5.25rem]" />
      <OneColumn renderFn={renderColumn5} className="w-[5.55rem]" />
      <OneColumn renderFn={renderColumn6} className="w-[5rem]" />
    </div>
  );
}
