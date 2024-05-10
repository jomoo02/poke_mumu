import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create();
const axiosCache = setupCache(instance);

const MALE = 'Male';
const FEMALE = 'Female';

const HISUI = {
  en: 'Hisuian Form',
  ko: '히스이의 모습',
};

const PALDEAN = {
  en: 'Paldean Form',
  ko: '팔데아의 모습',
};

const LOCATON_FORMS = [HISUI, PALDEAN];

const SPEICIAL_FORMS = [
  { name: 'paldea-combat-breed', form: { en: 'Paldean Form / Combat Breed', ko: '팔데아의 모습 / 컴뱃종' } },
  { name: 'paldea-blaze-breed', form: { en: 'Paldean Form / Blaze Breed', ko: '팔데아의 모습 / 블레이즈종' } },
  { name: 'paldea-aqua-breed', form: { en: 'Paldean Form / Aqua Breed', ko: '팔데아의 모습 / 아쿠아종' } },

];

function getGenderName(gender) {
  const MALE_KO = '수컷의 모습';
  const FEMALE_KO = '암컷의 모습';

  const name = {
    en: gender,
    ko: gender === FEMALE ? FEMALE_KO : MALE_KO,
  };

  return name;
}

function filterForm(forms) {
  const exceptions = [
    'pichu-spiky-eared',
    'mothim-sandy',
    'mothim-trash',
  ];

  return forms.filter(({ name }) => !exceptions.includes(name));
}

function filterVarieties(varieties) {
  const PIKACHU = 'pikachu';

  const EXCLUSION_FORMS = [
    'gmax',
    'totem',
    'starter',
  ];

  return varieties.filter(({ pokemon }) => {
    const { name } = pokemon;

    if (EXCLUSION_FORMS.some((form) => name.includes(form))) {
      return false;
    }

    if (name.includes(PIKACHU) && name !== PIKACHU) {
      return false;
    }
    return true;
  });
}

async function fetchVarietiesFormUrls(varieties) {
  const varietiesUrls = filterVarieties(varieties)
    .map(({ pokemon }) => pokemon.url);

  try {
    const varietiesFormsUrls = await Promise.all(
      varietiesUrls.map(async (url) => {
        const data = await (await fetch(url)).json();
        const { forms } = data;
        return filterForm(forms).map(({ url: formUrl }) => formUrl);
      }),
    );

    return varietiesFormsUrls.flat();
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

function pickFormName(formNames, name) {
  const specialCase = SPEICIAL_FORMS.find((form) => form.name === name);
  if (specialCase) {
    return specialCase.form;
  }

  const DEFAULT = {
    en: 'default',
    ko: '기본 모습',
  };

  const findLanguageName = (target) => (
    formNames.find(({ language }) => language.name === target)?.name
  );

  const nameEn = findLanguageName('en');

  if (!nameEn) {
    return DEFAULT;
  }

  const addedLocaionForms = LOCATON_FORMS.find(({ en }) => en === nameEn);

  if (addedLocaionForms) {
    return { ...addedLocaionForms };
  }

  const nameKo = findLanguageName('ko') || nameEn;

  return {
    en: nameEn,
    ko: nameKo,
  };
}

function checkFemaleCase(name) {
  const FEMALE_CASES = [
    'unfezant',
    'frillish',
    'jellicent',
    'pyroar',
  ];

  return FEMALE_CASES.find((femaleName) => femaleName === name);
}

function pickId(sprites, pokemonUrl, gender = MALE) {
  if (gender === FEMALE && sprites.front_female) {
    const sprity = sprites.front_female;
    return `female/${sprity.split('/').at(-1).split('.')[0]}`;
  }

  if (sprites.front_default) {
    const sprity = sprites.front_default;
    return sprity.split('/').at(-1).split('.')[0];
  }

  return pokemonUrl.split('/').at(-2);
}

async function fetchFormsId(formUrls) {
  try {
    const formIds = await Promise.all(
      formUrls.map(async (url) => {
        const res = await axiosCache(url);

        const {
          sprites,
          name,
          form_name: formName,
          form_names: formNames,
          pokemon: { url: pokemonUrl },
        } = res.data;

        if (checkFemaleCase(name)) {
          return [MALE, FEMALE].map((gender) => ({
            name: getGenderName(gender),
            id: pickId(sprites, pokemonUrl, gender),
          }));
        }

        return {
          name: pickFormName(formNames, formName),
          id: pickId(sprites, pokemonUrl),
        };
      }),
    );

    return formIds.flat();
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export default async function fetchForms(varieties, forms) {
  try {
    const varietiesFormsUrls = await fetchVarietiesFormUrls(varieties);
    const formUrls = filterForm(forms).map(({ url }) => url);
    const allUrls = [
      ...new Set([...varietiesFormsUrls, ...formUrls]),
    ];

    return fetchFormsId(allUrls);
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
