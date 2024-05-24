import React from 'react';

const NATURE_MAP = {
  amped: {
    ko: '노력, 고집, 개구쟁이, 용감, 온순, 장난꾸러기, 촐랑, 덜렁, 변덕, 건방, 성급, 명랑, 천진난만',
    en: 'Hardy, Brave, Adamant, Naughty, Docile, Impish, Lax, Hasty, Jolly, Naive, Rash, Sassy, or Quirky',
  },
  'low key': {
    ko: '외로움, 대담, 무사태평, 조심, 의젓, 수줍음, 냉정, 차분, 얌전, 신중, 겁쟁이, 성실',
    en: 'Lonely, Bold, Relaxed, Timid, Serious, Modest Mild, Quiet, Bashful, Calm, Gentle, or Careful',
  },
};

export default function RelativeNature({ value, language }) {
  const natures = NATURE_MAP[value];

  if (language === 'ko') {
    return (
      <div>
        <div>
          원래 성격에 따라
        </div>
        <div className="text-xs">{`(${natures.ko})`}</div>
      </div>
    );
  }
  return (
    <div>
      <span>Nature: </span>
      <span>{natures.en}</span>
    </div>
  );
}
