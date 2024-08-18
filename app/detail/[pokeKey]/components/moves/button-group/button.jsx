import React from 'react';

export default function GroupButton({
  isActive,
  className,
  handleClick,
  children,
}) {
  if (isActive) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
