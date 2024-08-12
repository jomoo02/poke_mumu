import { useLanguage } from '@/app/language-provider';

export default function useTableTitle(method) {
  const { language } = useLanguage();

  const getMachineTitleObj = (type) => ({
    en: `moves learnt by ${type}`,
    ko: `기술머신 ${type} 으로 익히는 기술`,
  });

  const titleObjMap = {
    level: {
      en: 'moves learnt by level up',
      ko: '레벌 업으로 익히는 기술',
    },
    egg: {
      en: 'egg moves',
      ko: '교배를 통해 유전 받을 수 있는 기술',
    },
    tutor: {
      en: 'move Tutor moves',
      ko: 'NPC로부터 배울 수 있는 기술',
    },
    reminder: {
      en: 'moves learnt by reminder',
      ko: '떠올리기로 익히는 기술',
    },
    pre: {
      en: 'pre-evolution moves',
      ko: '이전 진화에서만 얻을 수 있는 기술',
    },
    TM: getMachineTitleObj('TM'),
    HM: getMachineTitleObj('HM'),
    TR: getMachineTitleObj('TR'),
  };


  const title = titleObjMap[method][language] || titleObjMap.level.ko;

  return {
    title,
  };
}
