import React from 'react';

export default function ConditionContainer({ className, children }) {
  return (
    <div className={`flex justify-center items-center ${className} text-balance flex-wrap text-center`}>
      {children}
    </div>
  );
}
