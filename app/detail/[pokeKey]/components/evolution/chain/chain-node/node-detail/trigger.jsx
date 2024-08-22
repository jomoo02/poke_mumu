import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { getTriggerLocaleContent } from './trigger.util';

export default function Trigger({
  trigger,
  condition,
}) {
  const { language } = useLanguage();

  const triggerLocaleContent = getTriggerLocaleContent(trigger, condition);

  if (!triggerLocaleContent) {
    return null;
  }

  const content = triggerLocaleContent[language] || triggerLocaleContent.ko;

  return <span>{content}</span>;
}
