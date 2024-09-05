import React from 'react';
import useTrigger from '../../hooks/useTrigger';

export default function Trigger({
  trigger,
  condition,
}) {
  const { triggerContent } = useTrigger(trigger, condition);

  if (!triggerContent) {
    return null;
  }

  return <span>{triggerContent}</span>;
}
