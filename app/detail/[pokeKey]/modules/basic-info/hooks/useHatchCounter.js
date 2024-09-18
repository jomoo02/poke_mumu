import { useLanguage } from '@/app/language-provider';
import { checkNoEggs } from '../utils/eggGroups';

export default function useHatchCounter(counter, eggGroups) {
  const { language } = useLanguage();

  const subjectEn = 'Egg cycles';

  const subjectKo = '부화 카운트';

  const localeSubject = language === 'en' ? subjectEn : subjectKo;

  const hatchCounter = checkNoEggs(eggGroups) ? 0 : counter;

  return {
    hatchCounter,
    subject: localeSubject,
  };
}
