import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  ItemLink,
  ItmeLinkWithParticle,
} from '@/app/components/link-containers';
import type { ItemKey } from '@/app/data/item';

interface ConditionItemProps {
  value: ItemKey;
}

function HeldItem({
  value,
}: ConditionItemProps) {
  const { language } = useLanguage();

  if (language === 'en') {
    return (
      <span>
        <span className="mr-1">holding</span>
        <ItmeLinkWithParticle item={value} />
      </span>
    );
  }
  return (
    <span>
      <ItmeLinkWithParticle item={value} />
      <span className="ml-1">지닌채</span>
    </span>
  );
}

function Item({
  value,
}: ConditionItemProps) {
  return (
    <span>
      <ItemLink item={value} />
    </span>
  );
}

const ConditionItem = {
  item: Item,
  heldItem: HeldItem,
};

export default ConditionItem;
