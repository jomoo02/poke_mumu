import { useLanguage } from '@/app/language-provider';
import { formatMeasurement } from '@/app/utils/format';

export default function useWeight(weight) {
  const { language } = useLanguage();

  const subjects = {
    en: 'Weight',
    ko: '체중',
  };

  const unit = 'kg';

  const localeSubject = subjects[language] || subjects.ko;

  const formattedWeight = formatMeasurement(weight, unit);

  return {
    weight: formattedWeight,
    subject: localeSubject,
  };
}
