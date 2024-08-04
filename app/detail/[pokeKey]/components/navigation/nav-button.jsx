import React from 'react';
import Link from 'next/link';
import ArrowRightIcon from '@/app/ui/icons/arrow-right';
import ArrowLeftIcon from '@/app/ui/icons/arrow-left';
import PokeInfo from './info';

export default function NavButton({
  pokeKey, direction, info, type,
}) {
  const directionIcon = {
    before: {
      IconComponent: ArrowLeftIcon,
      flexDirection: 'flex-row',
      iconClassName: 'border-r',
    },
    next: {
      IconComponent: ArrowRightIcon,
      flexDirection: 'flex-row-reverse',
      iconClassName: 'border-l',
    },
  };

  const { IconComponent, flexDirection, iconClassName } = directionIcon[direction];

  return (
    <Link
      href={`/detail/${pokeKey}`}
      className={`flex border-2 ${type}-border rounded-lg items-center h-14 md:h-16 ${flexDirection}`}
    >
      <div className={`${iconClassName} h-full flex items-center justify-center px-4`}>
        <IconComponent />
      </div>
      <div className="flex-1">
        <PokeInfo info={info} />
      </div>
    </Link>
  );
}
