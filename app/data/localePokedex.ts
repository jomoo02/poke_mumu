import {
  versionsEn,
} from './version';

const kanto = 'kanto';
const originalJohto = 'original-johto';
const hoenn = 'hoenn';
const updatedKanto = 'updated-kanto';
const originalSinnoh = 'original-sinnoh';
const extendedSinnoh = 'extended-sinnoh';
const updatedJohto = 'updated-johto';
const originalUnova = 'original-unova';
const updatedUnova = 'updated-unova';
const kalosCentral = 'kalos-central';
const kalosCoastal = 'kalos-coastal';
const kalosMountain = 'kalos-mountain';
const updatedHoenn = 'updated-hoenn';
const originalAlola = 'original-alola';
const updatedAlola = 'updated-alola';
const letsgoKanto = 'letsgo-kanto';
const galar = 'galar';
const isleOfArmor = 'isle-of-armor';
const crownTundra = 'crown-tundra';
const hisui = 'hisui';
const paldea = 'paldea';
const kitakami = 'kitakami';
const bluberry = 'blueberry';

const localePokedexIndexs = {
  [kanto]: 2,
  [originalJohto]: 3,
  [hoenn]: 4,
  [updatedKanto]: 5,
  [originalSinnoh]: 6,
  [extendedSinnoh]: 7,
  [updatedJohto]: 8,
  [originalUnova]: 9,
  [updatedUnova]: 10,
  [kalosCentral]: 11,
  [kalosCoastal]: 12,
  [kalosMountain]: 13,
  [updatedHoenn]: 14,
  [originalAlola]: 15,
  [updatedAlola]: 16,
  [letsgoKanto]: 17,
  [galar]: 18,
  [isleOfArmor]: 19,
  [crownTundra]: 20,
  [hisui]: 21,
  [paldea]: 22,
  [kitakami]: 23,
  [bluberry]: 24,
};

export type LocalePokedex = keyof typeof localePokedexIndexs;

const localesPokedexKo: Record<LocalePokedex, string> = {
  [kanto]: '레드/블루/피카츄',
  [originalJohto]: '골드/실버/크리스탈',
  [hoenn]: '루비/사파이어/에메랄드',
  [updatedKanto]: '파이어레드/리프그린',
  [originalSinnoh]: '디아루가/펄',
  [extendedSinnoh]: '기라티나',
  [updatedJohto]: '하트골드/소울실버',
  [originalUnova]: '블랙/화이트',
  [updatedUnova]: '블랙2/화이트2',
  [kalosCentral]: 'X/Y - 셑트럴칼로스',
  [kalosCoastal]: 'X/Y - 코스트칼로스',
  [kalosMountain]: 'X/Y - 마운틴칼로스',
  [updatedHoenn]: '오메가루비/알파사파이어',
  [originalAlola]: '썬/문',
  [updatedAlola]: '울트라썬/울트라문',
  [letsgoKanto]: '레츠고피카츄/레츠고이브이',
  [galar]: '소드/실드 - 가라르',
  [isleOfArmor]: '소드/실드 - 갑옷섬',
  [crownTundra]: '소드/실드 - 왕관의 설원',
  [hisui]: '레전드아르세우스',
  [paldea]: '스칼렛/바이올렛 - 팔데아',
  [kitakami]: '스칼렛/바이올렛 - 북신',
  [bluberry]: '스칼렛/바이올렛 - 블루베리',
};

const localesPokedexEn: Record<LocalePokedex, string> = {
  [kanto]: `${versionsEn['red-blue']}/${versionsEn.yellow}`,
  [originalJohto]: `${versionsEn['gold-silver']}/${versionsEn.crystal}`,
  [hoenn]: `${versionsEn['ruby-sapphire']}/${versionsEn.emerald}`,
  [updatedKanto]: `${versionsEn['firered-leafgreen']}`,
  [originalSinnoh]: `${versionsEn['diamond-pearl']}`,
  [extendedSinnoh]: `${versionsEn.platinum}`,
  [updatedJohto]: `${versionsEn['heartgold-soulsilver']}`,
  [originalUnova]: `${versionsEn['black-white']}`,
  [updatedUnova]: `${versionsEn['black-2-white-2']}`,
  [kalosCentral]: `${versionsEn['x-y']} - Central Kalos`,
  [kalosCoastal]: `${versionsEn['x-y']} - Coastal Kalos`,
  [kalosMountain]: `${versionsEn['x-y']} - Mountain Kalos`,
  [updatedHoenn]: `${versionsEn['omega-ruby-alpha-sapphire']}`,
  [originalAlola]: `${versionsEn['sun-moon']}`,
  [updatedAlola]: `${versionsEn['ultra-sun-ultra-moon']}`,
  [letsgoKanto]: `${versionsEn['lets-go-pikachu-lets-go-eevee']}`,
  [galar]: `${versionsEn['sword-shield']} - Galar`,
  [isleOfArmor]: `${versionsEn['sword-shield']} - The Isle of Armor`,
  [crownTundra]: `${versionsEn['sword-shield']} - The Crown Tundra`,
  [hisui]: 'Legends: Arceus',
  [paldea]: `${versionsEn['scarlet-violet']} - Paldea`,
  [kitakami]: `${versionsEn['scarlet-violet']} - The Teal Mask`,
  [bluberry]: `${versionsEn['scarlet-violet']} - The Indigo Disk`,
};

export {
  updatedKanto,
  localePokedexIndexs,
  localesPokedexKo,
  localesPokedexEn,
};
