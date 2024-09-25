import React from 'react';
import Type from '@/app/components/type';

function DamageRateText({ damageRate }) {
  return (
    <div className="flex justify-center items-center md:py-1 md:border-b text-[13px] md:text-sm font-semibold min-w-16">
      {`x ${damageRate}`}
    </div>
  );
}

function DamageRateTypes({ types }) {
  const gridColsClassNameMap = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-1',
    3: 'md:grid-cols-1 lg:grid-cols-2',
    4: 'md:grid-cols-1 lg:grid-cols-2',
    8: 'md:grid-cols-3 lg:grid-cols-4',
    9: 'md:grid-cols-3 lg:grid-cols-4',
    10: 'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
    11: 'md:grid-cols-4 lg:grid-cols-5',
    12: 'md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6',
    13: 'md:grid-cols-6 lg:grid-cols-7',
    14: 'md:grid-cols-6 lg:grid-cols-7',
    15: 'md:grid-cols-5 lg:grid-cols-6',
    16: 'md:grid-cols-6 lg:grid-cols-7',
    default: 'md:grid-cols-2 lg:grid-cols-3',
  };

  const gridColsClassName = gridColsClassNameMap[types.length] || gridColsClassNameMap.default;

  return (
    <div className="flex justify-center md:px-3.5 md:py-3">
      <div
        className={`grid grid-cols-3 sm:grid-cols-6 ${gridColsClassName} gap-x-2.5 sm:gap-x-3 lg:gap-x-2.5 gap-y-2 sm:gap-y-2 lg:gap-y-2.5 justify-items-center`}
      >
        {types.map((type) => (
          <Type type={type} key={type} />
        ))}
      </div>
    </div>
  );
}

const DamageRate = {
  Text: DamageRateText,
  Types: DamageRateTypes,
};

export default DamageRate;
