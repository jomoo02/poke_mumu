import { useLanguage } from '@/app/language-provider';
import { getTriggerLocaleContent } from '../utils/trigger';

export default function useTrigger(trigger, condition) {
  const { language } = useLanguage();

  const triggerContent = getTriggerLocaleContent(trigger, condition);

  const localeContent = triggerContent[language] || triggerContent.ko || '';

  return {
    triggerContent: localeContent,
  };
}
