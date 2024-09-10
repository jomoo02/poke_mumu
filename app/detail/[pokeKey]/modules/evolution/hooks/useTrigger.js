import { useLanguage } from '@/app/language-provider';
import { getTriggerLocaleContent } from '../utils/triggerUtils';

export default function useTrigger(trigger, condition) {
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
