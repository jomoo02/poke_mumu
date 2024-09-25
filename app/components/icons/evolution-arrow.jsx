import React from 'react';
import { CgArrowRight } from '@react-icons/all-files/cg/CgArrowRight';
import { CgArrowDown } from '@react-icons/all-files/cg/CgArrowDown';

export default function EvolutionArrowIcon({ maxWidth = 1 }) {
  const color = '#64748b';
  const rightSize = '1.75rem';
  const downSize = '1.5rem';

  if (maxWidth === 8) {
    return (
      <>
        <CgArrowDown size={rightSize} color={color} className="hidden md:block" />
        <CgArrowDown size={downSize} color={color} className="md:hidden" />
      </>
    );
  }

  return (
    <>
      <CgArrowRight size={rightSize} color={color} className="hidden md:block" />
      <CgArrowDown size={downSize} color={color} className="md:hidden" />
    </>
  );
}
