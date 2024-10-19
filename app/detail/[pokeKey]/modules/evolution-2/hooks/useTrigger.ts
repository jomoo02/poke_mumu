import { useLanguage } from '@/app/language-provider';
import { getTriggerLocaleContent } from '../utils/triggerUtils';
import type { TriggerKey } from '../types/trigger';
import type { ConditionItem } from '../types/condition';

export default function useTrigger(trigger: TriggerKey, condition: ConditionItem[]) {
  const defaultTriggerContent = '';

  const { language } = useLanguage();

  const triggerContent = getTriggerLocaleContent(trigger, condition);

  if (!triggerContent) {
    return {
      triggerContent: defaultTriggerContent,
    };
  }

  const localeContent = triggerContent[language] || triggerContent.ko || defaultTriggerContent;

  return {
    triggerContent: localeContent,
  };
}
