const DEFAULT = {
  en: 'default',
  ko: 'default',
};

const DEFAULT_FORM_SPECIES = [
  'castform',
  'koraidon',
  'miraidon',
  'average',
];

const EXCLUSION_FORM_SPECIES = [
  'unown',
  'pichu',
  'mothim',
  'arceus',
  'genesect',
  'scatterbug',
  'spewpa',
  'vivillon',
  'flabebe',
  'floette',
  'florges',
  'furfrou',
  'silvally',
  'xerneas',
  'alcremie',
  'poltchageist',
  'sinistcha',
  'sinistea',
  'polteageist',

  'burmy',
  'shellos',
  'gastrodon',
  'cherrim',
  'deerling',
  'sawsbuck',
  'gimmighoul',
];

const FORM_KO_MAP = {
  hisui: '히스이의 모습',
  paldea: '팔데아의 모습',
  male: '수컷의 모습',
  female: '암컷의 모습',
  incarnate: '화신폼',
  therian: '영물폼',
  'green-plumage': '그린 페더',
  'blue-plumage': '블루 페더',
  'yellow-plumage': '옐로 페더',
  'white-plumage': '화이트 페더',
  zero: '나이브폼',
  hero: '마이티폼',
  curly: '젖힌 모습',
  droopy: '늘어진 모습',
  stretchy: '뻗은 모습',
  'two-segment': '두 마디폼',
  chest: '상자폼',
  terastal: '테라스탈폼',
  stellar: '스텔라폼',
  'family-of-four': '네 식구',
  origin: '오리진폼',
  'white-striped': '백색근의 모습',
};

const FORM_NAME_KO_MAP = {
  'paldea-blaze-breed': {
    en: 'Paldean Form / Blaze Breed',
    ko: '팔데아의 모습 / 블레이즈종',
  },
  'paldea-combat-breed': {
    en: 'Paldean Form / Combat Breed',
    ko: '팔데아의 모습 / 컴뱃종',
  },
  'paldea-aqua-breed': {
    en: 'Paldean Form / Aqua Breed',
    ko: '팔데아의 모습 / 워터종',
  },
};

const NAME_KO_MAP = {
  'darmanitan-galar-zen': {
    en: 'Galarian Form / Zen Mode',
    ko: '가라르의 모습 / 달마 모드',
  },
  terapagos: {
    en: 'Normal Form',
    ko: '노말폼',
  },
};

function findLanguageName(names, targetLanguage) {
  return names.find(({ language }) => language.name === targetLanguage)?.name || 'default';
}

function translateFormNameKo(form, formNames) {
  if (FORM_KO_MAP[form]) {
    return FORM_KO_MAP[form];
  }

  return findLanguageName(formNames, 'ko');
}

async function fetchFormData(formUrl) {
  const data = await (await fetch(formUrl)).json();

  const {
    name,
    form_name: formName,
    form_names: formNames,
    pokemon,
  } = data;

  const form = formName || 'default';
  const formNameEn = findLanguageName(formNames, 'en');

  if (
    formNameEn?.toLowerCase() === name
    || DEFAULT_FORM_SPECIES.some((target) => name.includes(target))
  ) {
    return { ...DEFAULT };
  }

  if (FORM_NAME_KO_MAP[formName]) {
    return { ...FORM_NAME_KO_MAP[formName] };
  }

  if (NAME_KO_MAP[pokemon?.name]) {
    return { ...NAME_KO_MAP[pokemon.name] };
  }

  return {
    en: formNameEn,
    ko: translateFormNameKo(form, formNames),
  };
}

export default async function fetchForm(nameEn, forms) {
  if (EXCLUSION_FORM_SPECIES.includes(nameEn)) {
    return { ...DEFAULT };
  }

  const targetForm = forms[0];

  return fetchFormData(targetForm.url);
}
