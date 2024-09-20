import { useLanguage } from '@/app/language-provider';
import { formatMeasurement } from '@/app/utils/format';

export default function useHeight(height) {
  const { language } = useLanguage();

  const subjects = {
    en: 'Height',
    ko: '신장',
  };

  const unit = 'm';

  const localeSubject = subjects[language] || subjects.ko;

  const formattedHeight = formatMeasurement(height, unit);

  return {
    height: formattedHeight,
    subject: localeSubject,
  };
}
