import dotenv from 'dotenv';
import DetailModel from '../../app/models/Detail.mjs';
import { connectMongoose, disconnectMongoose } from '../../app/api/db/connectMongoose.mjs';

dotenv.config({ path: '.env.local' });

const ABILITIES_MAP_KO = {
  'Lingering Aroma': {
    name: '가시지않는향기',
    text: '상대가 접촉하면 가시지 않는 향기가 상대에게 배어 버린다.',
  },
  'Well-Baked Body': {
    name: '노릇노릇바디',
    text: '불꽃타입 기술로 공격받으면 데미지를 받지 않고 방어가 크게 올라간다.',
  },
  'Seed Sower': {
    name: '넘치는씨',
    text: '공격을 받으면 필드를 그래스필드로 만든다.',
  },
  'Purifying Salt': {
    name: '정화의소금',
    text: '깨끗한 소금에 의해 상태 이상이 되지 않는다. 고스트타입 기술의 데미지를 반감시킨다.',
  },
  Electromorphosis: {
    name: '전기로바꾸기',
    text: '데미지를 받으면 충전 상태가 된다.',
  },
  'Wind Power': {
    name: '풍력발전',
    text: '바람 기술을 받으면 충전 상태가 된다.',
  },
  'Guard Dog': {
    name: '파수견',
    text: '위협을 받으면 공격이 올라간다. 포켓몬을 교체시키는 기술이나 도구의 효과를 받지 않는다.',
  },
  'Wind Rider': {
    name: '바람타기',
    text: '순풍이 불거나 바람 기술로 공격받으면 데미지를 받지 않고 공격이 올라간다.',
  },
  'Mycelium Might': {
    name: '균사의힘',
    text: '변화 기술을 사용할 때 반드시 행동이 느려지지만 상대 특성에 방해받지 않는다.',
  },
  'Anger Shell': {
    name: '분노의껍질',
    text: '상대의 공격에 의해 HP가 절반이 되면 화가 나서 방어와 특수방어가 떨어지지만 공격, 특수공격, 스피드가 올라간다.',
  },
  Opportunist: {
    name: '편승',
    text: '상대의 능력이 올라가면 자신도 편승해서 똑같이 능력을 올린다.',
  },
  'Rocky Payload': {
    name: '바위나르기',
    text: '바위타입 기술의 위력이 올라간다.',
  },
  'Zero to Hero': {
    name: '마이티체인지',
    text: '지닌 포켓몬으로 돌아오면 마이티폼으로 변한다.',
  },
  'Earth Eater': {
    name: '흙먹기',
    text: '땅타입의 기술로 공격받으면 데미지를 받지 않고 회복한다.',
  },
  'Toxic Debris': {
    name: '독치장',
    text: '물리 기술로 데미지를 받으면 상대의 발밑에 독압정을 뿌린다.',
  },
  Costar: {
    name: '협연',
    text: '등장했을 때 같은 편의 능력 변화를 복사한다.',
  },
  Sharpness: {
    name: '예리함',
    text: '상대를 베는 기술의 위력이 올라간다.',
  },
  Commander: {
    name: '사령탑',
    text: '등장했을 때 같은 편에 어써러셔가 있으면 입속에 들어가 안에서 지시를 내린다.',
  },
  'Cud Chew': {
    name: '되새김질',
    text: '한 번에 한하여 나무열매를 먹으면 다음 턴이 끝날 때 위에서 꺼내서 또 먹는다.',
  },
  'Armor Tail': {
    name: '테일아머',
    text: '머리를 감싸고 있는 수수께끼의 꼬리가 이쪽을 향한 선제 기술을 사용할 수 없게 한다.',
  },
  'Supreme Overlord': {
    name: '총대장',
    text: '등장했을 때 지금까지 쓰러진 같은 편의 수가 많을수록 조금씩 공격과 특수공격이 올라간다.',
  },
  Protosynthesis: {
    name: '고대활성',
    text: '부스트에너지를 지니고 있거나 날씨가 맑을 때 가장 높은 능력이 올라간다.',
  },
  'Quark Drive': {
    name: '쿼크차지',
    text: '부스트에너지를 지니고 있거나 일렉트릭필드일 때 가장 높은 능력이 올라간다.',
  },
  'Thermal Exchange': {
    name: '열교환',
    text: '불꽃타입 기술로 공격받으면 공격이 올라간다. 화상 상태가 되지 않는다.',
  },
  'Good as Gold': {
    name: '황금몸',
    text: '산화하지 않는 튼튼한 황금몸 덕분에 상대의 변화 기술의 영향을 받지 않는다.',
  },
  'Tablets of Ruin': {
    name: '재앙의목간',
    text: '이 특성을 가진 포켓몬을 제외한 모든 포켓몬의 공격을 약하게 만든다.',
  },
  'Sword of Ruin': {
    name: '재앙의검',
    text: '이 특성을 가진 포켓몬을 제외한 모든 포켓몬의 방어를 약하게 만든다.',
  },
  'Vessel of Ruin': {
    name: '재앙의그릇',
    text: '이 특성을 가진 포켓몬을 제외한 모든 포켓몬의 특수공격을 약하게 만든다.',
  },
  'Beads of Ruin': {
    name: '재앙의구슬',
    text: '이 특성을 가진 포켓몬을 제외한 모든 포켓몬의 특수방어를 약하게 만든다.',
  },
  'Orichalcum Pulse': {
    name: '진홍빛고동',
    text: '등장했을 때 날씨를 맑음으로 만든다. 햇살이 강하면 고대의 고동에 의해 공격이 강화된다.',
  },
  'Hadron Engine': {
    name: '하드론엔진',
    text: '등장했을 때 일렉트릭필드를 전개한다. 일렉트릭필드일 때 미래 기관에 의해 특수공격이 강화된다.',
  },
  'Supersweet Syrup': {
    name: '감미로운꿀',
    text: '등장했을 때 상대의 회피율을 떨어뜨린다.',
  },
  Hospitality: {
    name: '대접',
    text: '등장했을 때 같은 편을 대접해서 HP를 조금 회복시킨다.',
  },
  'Toxic Chain': {
    name: '독사슬',
    text: '공격을 맞히면, 상대를 맹독 상태로 만들 때가 있다.',
  },
  'Tera Shift': {
    name: '테라체인지',
    text: '등장했을 때 주위의 에너지를 흡수하여 테라스탈폼으로 변화한다.',
  },
  'Tera Shell': {
    name: '테라셸',
    text: '모든 타입의 힘이 담긴 등껍질이 HP가 꽉 찼을 때 받는 데미지를 모두 효과가 별로이게 만든다.',
  },
  'Teraform Zero': {
    name: '제로포밍',
    text: '테라파고스가 스텔라폼이 되었을 때 숨겨진 힘에 의해 날씨와 필드의 영향을 모두 무효로 만든다.',
  },
  'Poison Puppeteer': {
    name: '독조종',
    text: '복숭악동의 기술에 의해 독 상태가 된 상대는 혼란 상태도 되어 버린다.',
  },
  'Mind’s Eye': {
    name: '심안',
    text: '노말타입과 격투타입 기술을 고스트타입에게 맞힐 수 있다. 상대의 회피율 변화를 무시하고 명중률도 떨어지지 않는다.',
  },
};

const ABILITIES_MAP_EN = {
  'Supersweet Syrup': 'A sickly sweet scent spreads across the field the first time the Pokémon enters a battle, lowering the evasiveness of opposing Pokémon.',
  Hospitality: "When the Pokémon enters a battle, it showers its ally with hospitality, restoring a small amount of the ally's HP.",
  'Toxic Chain': 'Toxic Chain may cause bad poisoning when the Pokémon hits an opponent with a move.',
  'Tera Shift': 'When the Pokémon enters a battle, it absorbs the energy around itself and transforms into its Terastal Form.',
  'Tera Shell': 'The Pokémon’s shell contains the powers of each type. All damage-dealing moves that hit the Pokémon when its HP is full will not be very effective.',
  'Teraform Zero': 'When Terapagos changes into its Stellar Form, it uses its hidden powers to eliminate all effects of weather and terrain, reducing them to zero.',
  'Poison Puppeteer': 'Pokémon poisoned by Pecharunt’s moves will also become confused.',
};

async function updateAbilitiesKo() {
  try {
    await connectMongoose();

    // eslint-disable-next-line no-restricted-syntax
    for (const [abilityName, ability] of Object.entries(ABILITIES_MAP_KO)) {
      const filter = { 'abilities.name.en': abilityName };
      const update = {
        $set: {
          'abilities.$[elem].flavorText.ko': ability,
          'abilities.$[elem].name.ko': ability.name, // name.ko도 함께 변경
        },
      };
      const options = { arrayFilters: [{ 'elem.name.en': abilityName }] };

      // eslint-disable-next-line no-await-in-loop
      await DetailModel.updateMany(filter, update, options);
    }

    await disconnectMongoose();
  } catch (error) {
    console.error(error);
  }
}

async function updateAbilitiesEn() {
  try {
    await connectMongoose();

    // eslint-disable-next-line no-restricted-syntax
    for (const [abilityName, ability] of Object.entries(ABILITIES_MAP_EN)) {
      const filter = { 'abilities.name.en': abilityName };
      const update = {
        $set: {
          'abilities.$[elem].flavorText.en': ability,
        },
      };
      const options = { arrayFilters: [{ 'elem.name.en': abilityName }] };

      // eslint-disable-next-line no-await-in-loop
      await DetailModel.updateMany(filter, update, options);
    }

    await disconnectMongoose();
  } catch (error) {
    console.error(error);
  }
}

updateAbilitiesKo();
updateAbilitiesEn();
