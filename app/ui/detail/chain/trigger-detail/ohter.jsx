import React from 'react';

function annihilape(language) {
  // 겟헨보숭
  return language === 'ko' ? (
    '분노의주먹을 20번 사용 후 레벨업'
  ) : (
    'Use Rage Fist 20 times'
  );
}

function sirfetchD(language) {
  return language === 'ko' ? '한 전투에서 급소를 3번 맞힌다' : 'achieve 3 critical hits in one battle';
}

function shedinja(language) {
  return language === 'ko' ? (
    '몬스터볼을 가지고 있는 상태에서 포켓몬 슬롯이 1자리 이상 비어 있을 때 토중몬 진화 시 빈 슬롯에 획득'
  ) : 'empty spot in party, Pokeball in bag';
}

function kingambit(language) {
  return language === 'ko' ? (
    '대장의징표를 지닌 절각참을 3마리 쓰러뜨린 후'
  ) : "defeat 3 Bisharp that are holding Leader's Crest";
}

function pawmot(language) {
  return 1;
}

function maushold(la) {
  return 1;
}

function brambleghast(a) {
  return 1;
}

function rabsca(a) {
  return 2;
}

function palafin(a) {
  return 1;
}

function gholdengo(a) {
  return 1;
}
export default function OtherCase({ name, language }) {
  console.log(name.toLowerCase());
  const NAEM_MAP = {
    annihilape,
    'sirfetch’d': sirfetchD,
    shedinja,
    kingambit,
    pawmot,
    maushold,
    brambleghast,
    rabsca,
    palafin,
    gholdengo,
  };

  const text = NAEM_MAP[name.toLowerCase()](language);
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
