import React from 'react';

export default function ConditionContainer({ styleClass, children }) {
  return (
    <div className={`flex justify-center items-center ${styleClass}`}>
      {children}
    </div>
  );
}
