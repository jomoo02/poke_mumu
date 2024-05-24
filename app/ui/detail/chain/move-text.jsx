import React from 'react';
import Link from 'next/link';

export default function MoveText({ move }) {
  return (
    <Link href={`move/${move}`}>
      {move}
    </Link>
  );
}
