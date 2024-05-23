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
  return language === 'ko' ? (
    '레츠고 모드에서 1000보 이상 걷고 볼로 돌아 가지 않은 상태에서'
  ) : "walk 1,000 steps in Let's Go mode";
}

function maushold(language) {
  return language === 'ko' ? (
    '랜덤'
  ) : 'only in battle, with a certain encryption constant';
}

function brambleghast(language) {
  return language === 'ko' ? (
    '레츠고 모드에서 1000보 이상 걷고 볼로 돌아 가지 않은 상태에서'
  ) : "walk 1,000 steps in Let's Go mode";
}

function rabsca(language) {
  return language === 'ko' ? (
    '레츠고 모드에서 1000보 이상 걷고 볼로 돌아 가지 않은 상태에서'
  ) : "walk 1,000 steps in Let's Go mode";
}

function palafin(language) {
  return language === 'ko' ? (
    '다른 플레이어와 유니온 서클을 플레이하고 있는 상태에서 레벨업'
  ) : 'in multiplayer';
}

function gholdengo(language) {
  return language === 'ko' ? (
    '모으령의코인을 999개 획득 후 레벨업'
  ) : '999 Gimmighoul Coins in the Bag';
}

// 변경예정
function urshifu(language) {
  return language === 'ko' ? '타워 족자' : 'in tower';
}
export default function OtherCase({ name, language }) {
  const NAEM_MAP = {
    annihilape,
    'sirfetch’d': sirfetchD,
    shedinja,
    kingambit,
    pawmot,
    'maushold(family of three)': maushold,
    'maushold(family of four)': maushold,
    brambleghast,
    rabsca,
    palafin,
    gholdengo,
    urshifu,
  };

  const text = NAEM_MAP[name.toLowerCase()](language);
  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
