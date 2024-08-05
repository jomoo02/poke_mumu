import React from 'react';
import { getDefenseCompatibility } from '@/app/lib/type-compatibility';
import Type from '@/app/ui/detail/type';

const TYPE_GRID_COLS_MAP = {
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
  16: 'md:grid-cols-6 lg:grid-cols-7',
  0: 'md:grid-cols-2 lg:grid-cols-3',
};

export default function TypeDefenseCompatibility({ types }) {
  const defenseCompatibility = getDefenseCompatibility(types);
  const multipleKeys = Object.keys(defenseCompatibility).sort((a, b) => b - a);

  return (
    <div className="flex justify-center flex-col md:flex-row">
      {multipleKeys.map((multiple) => {
        const compatibilities = defenseCompatibility[multiple];
        const gridClassName = TYPE_GRID_COLS_MAP[compatibilities.length] || TYPE_GRID_COLS_MAP[0];
        const isFlexAutoClassName = compatibilities.length <= 4 ? '' : 'flex-auto';
        return (
          <div
            key={multiple}
            className={`flex gap-x-2 md:flex-col border-b last:border-b-0 md:border-b-0 py-1.5 md:py-0 md:border-r ${isFlexAutoClassName}`}
          >
            <div className="flex justify-center items-center md:py-1 md:border-b">
              <h3 className="text-[13px] md:text-sm w-16 font-medium text-center align-top">
                {`x ${multiple}`}
              </h3>
            </div>
            <div className="flex justify-center md:px-3.5 md:py-3">
              <div
                className={`grid grid-cols-3 sm:grid-cols-6 ${gridClassName} gap-x-2.5 sm:gap-x-3 lg:gap-x-2.5 gap-y-2 sm:gap-y-2 lg:gap-y-2.5 justify-items-center`}
              >
                {compatibilities.map((type) => (
                  <Type type={type} key={type} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
