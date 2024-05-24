import React from 'react';

const OTHER_CASE_MAP = {
  annihilape: {
    en: 'after using Rage Fist 20 times',
    ko: '분노의주먹을 20번 사용 후',
  },
  sirfetchD: {
    en: 'achieve 3 critical hits in one battle',
    ko: '한 전투에서 급소를 3번 맞힌다',
  },
  shedinja: {
    en: 'empty spot in party, Pokeball in bag',
    ko: '몬스터볼을 가지고 있는 상태에서 포켓몬 슬롯이 1자리 이상 비어 있을 때 토중몬 진화 시 빈 슬롯에 획득',
  },
  runerigus: {
    en: 'Pass under the rock arch in Dusty Bowl after taking at least 49 HP in damage from attacks without fainting',
    ko: '기절하지 않고 49 이상의 누적 데미지를 입은 후 모래먼지구덩이의 고인돌 아래를 지나간다',
  },
  kingambit: {
    en: "defeat 3 Bisharp that are holding Leader's Crest",
    ko: '대장의징표를 지닌 절각참을 3마리 쓰러뜨린 후',
  },
  urshifu_single: {
    en: 'in Tower of Darkness in Galar',
    ko: '악의 탑을 공략해 악의족자를 보여줌',
  },
  urshifu_rapid: {
    en: 'in Tower of Water in Galar',
    ko: '물의 탑을 공략해 물의족자를 보여줌',
  },
  lets_go: {
    en: "walk 1,000 steps in Let's Go mode",
    ko: '레츠고 모드에서 1000보 이상 걷고 볼로 돌아 가지 않은 상태에서',
  },
  maushold: {
    en: 'only in battle, with a certain encryption constant',
    ko: '랜덤',
  },
  palafin: {
    en: 'while in a Union Circle group',
    ko: '다른 플레이어와 유니온 서클을 플레이하고 있는 상태에서',
  },
  gholdengo: {
    en: '999 Gimmighoul Coins in the Bag',
    ko: '모으령의코인을 999개 획득 후',
  },
};

export default function OtherCase({ value, language }) {
  const curNameCase = OTHER_CASE_MAP[value];
  const text = language === 'ko' ? curNameCase.ko : curNameCase.en;

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
