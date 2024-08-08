import React from 'react';

export default function TableRow({
  children,
  renderMove,
  renderType,
  renderDamageClass,
  rednerPower,
  renderAccuracy,
}) {
  return (
    <div className="flex h-9 items-center">
      {children}
      <div className="text-base px-2.5 w-[10.5rem] font-semibold text-slate-700">
        {renderMove()}
      </div>
      <div className="flex justify-center w-[5.25rem]">
        {renderType()}
      </div>
      <div className="flex justify-center w-[5.25rem]">
        {renderDamageClass()}
      </div>
      <div className="text-sm font-medium text-right w-[5.55rem] px-3">{rednerPower()}</div>
      <div className="text-sm font-medium text-right w-[5rem] px-3">{renderAccuracy()}</div>
    </div>
  );
}
