'use client';

import React from 'react';
import Link from 'next/link';
import ArrowRightIcon from '../icons/arrow-right';

function NextRouteButton({ order }) {
  return (
    <Link
      href={`/${order}`}
    >
      <ArrowRightIcon />
    </Link>
  );
}

export default function RouteButton({ order }) {
  return (
    <div>
      <NextRouteButton order={Number(order) + 1} />
    </div>
  );
}
