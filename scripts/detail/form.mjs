const MALE = 'Male';
const FEMALE = 'Female';

function getGenderName(gender) {
  const MALE_KO = '수컷의 모습';
  const FEMALE_KO = '암컷의 모습';

  const name = {
    en: gender,
    ko: gender === FEMALE ? FEMALE_KO : MALE_KO,
  };

  return name;
}

function filterVarieties(varieties) {
  const PIKACHU = 'pikachu';

  const EXCLUSION_FORMS = [
    'gmax',
    'totem',
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
        return forms.map(({ url: formUrl }) => formUrl);
      }),
    );

    return varietiesFormsUrls.flat();
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

function pickFormName(formNames) {
  const DEFAULT = {
    en: 'default',
    ko: '기본 모습',
  };

  const findLanguageName = (target) => (
    formNames.find(({ language }) => language.name === target)?.name || DEFAULT.en
  );

  const nameEn = findLanguageName('en');
  const nameKo = findLanguageName('ko');
  const genderName = getGenderName(nameEn);

  if (nameEn === DEFAULT.en) {
    return {
      ...DEFAULT,
    };
  }

  if (genderName.en) {
    return {
      ...genderName,
    };
  }

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

function pickId(sprites, pokemon, gender = MALE) {
  if (gender === FEMALE) {
    const sprity = sprites.front_female;
    return `female/${sprity.split('/').at(-1).split('.')[0]}`;
  }

  if (sprites.front_default) {
    const sprity = sprites.front_default;
    return sprity.split('/').at(-1).split('.')[0];
  }

  return pokemon.url.split('/').at(-2);
}

async function fetchFormsId(formUrls) {
  try {
    const formIds = await Promise.all(
      formUrls.map(async (url) => {
        const data = await (await fetch(url)).json();

        const {
          sprites,
          name,
          form_names: formNames,
          pokemon: { url: pokemonUrl },
        } = data;

        if (checkFemaleCase(name)) {
          return [MALE, FEMALE].map((gender) => ({
            name: getGenderName(gender),
            id: pickId(sprites, pokemonUrl, gender),
          }));
        }

        return {
          name: pickFormName(formNames),
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
    const formUrls = forms.map(({ url }) => url);
    const allUrls = [
      ...new Set([...varietiesFormsUrls, ...formUrls]),
    ];

    return fetchFormsId(allUrls);
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
