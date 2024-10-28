const versionsKo = {
  'red-blue': '레드/그린',
  yellow: '피카츄',
  'gold-silver': '골드/실버',
  crystal: '크리스탈',
  'ruby-sapphire': '루비/사파이어',
  emerald: '에메랄드',
  'firered-leafgreen': '파이어레드/리프그린',
  'diamond-pearl': '디아루가/펄기아',
  platinum: '기라티나',
  'heartgold-soulsilver': '하트골드/소울실버',
  'black-white': '블랙/화이트',
  'black-2-white-2': '블랙 2/화이트 2',
  'x-y': 'X/Y',
  'omega-ruby-alpha-sapphire': '오메가루비/알파사파이어',
  'sun-moon': '썬/문',
  'ultra-sun-ultra-moon': '울트라썬/울트라문',
  'sword-shield': '소드/실드',
  'brilliant-diamond-and-shining-pearl': '브릴리언트 다이아몬드/샤이닝 펄',
  'lets-go-pikachu-lets-go-eevee': '레츠고! 피카츄/레츠고! 이브이',
  'scarlet-violet': '스칼렛/바이올렛',
};

export type Version = keyof typeof versionsKo;

const versionsEn: Record<Version, string> = {
  'red-blue': 'Red/Blue',
  yellow: 'Yellow',
  'gold-silver': 'Gold/Silver',
  crystal: 'Crystal',
  'ruby-sapphire': 'Ruby/Sapphire',
  emerald: 'Emerald',
  'firered-leafgreen': 'FireRed/LeafGreen',
  'diamond-pearl': 'Diamond/Pearl',
  platinum: 'Platinum',
  'heartgold-soulsilver': 'HeartGold/SoulSilver',
  'black-white': 'Black/White',
  'black-2-white-2': 'Black 2/White 2',
  'x-y': 'X/Y',
  'omega-ruby-alpha-sapphire': 'Omega Ruby/Omega Sapphire',
  'sun-moon': 'Sun/Moon',
  'ultra-sun-ultra-moon': 'Ultra Sun/Ultra Moon',
  'sword-shield': 'Sword/Shield',
  'brilliant-diamond-and-shining-pearl': 'Brilliant Diamond/Shining Pearl',
  'lets-go-pikachu-lets-go-eevee': "Let's Go Pikachu/Let's Go Eevee",
  'scarlet-violet': 'Scarlet/Violet',
};

export {
  versionsEn,
  versionsKo,
};
