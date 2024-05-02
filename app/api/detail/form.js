const exclusionForm = [
  'gmax',
  'totem',
];

const femaleCase = [
  'unfezant',
  'frillish',
  'jellicent',
  'pyroar',
];

async function pickSpeciesVarietiesFormUrls(varieties) {
  const filteredVarieties = varieties.filter(({ pokemon }) => {
    const { name } = pokemon;
    if (exclusionForm.some((form) => name.includes(form))) {
      return false;
    }
    if (name.includes('pikachu') && name !== 'pikachu') {
      return false;
    }
    return true;
  });

  const varietiesUrls = filteredVarieties.map(({ pokemon }) => pokemon.url);
  const varietiesFormUrls = await Promise.all(varietiesUrls.map(async (url) => {
    const data = await (await fetch(url)).json();
    const { forms } = data;
    return forms.map(({ url: formUrl }) => formUrl);
  }));

  return varietiesFormUrls.flat();
}

function findFormName(formNames) {
  const findTargetLanguage = (targetLanguage) => (
    formNames.find(({ language }) => language.name === targetLanguage)?.name
  );
  const nameEn = findTargetLanguage('en');

  if (!nameEn) {
    return {
      en: 'default',
      ko: '기본 모습',
    };
  }

  if (nameEn === 'Male') {
    return {
      en: nameEn,
      ko: '수컷의 모습',
    };
  }

  if (nameEn === 'Female') {
    return {
      en: nameEn,
      ko: '암컷의 모습',
    };
  }
  const nameKo = findTargetLanguage('ko');

  return {
    en: nameEn,
    ko: nameKo || nameEn,
  };
}

function checkFemalCase(name) {
  return femaleCase.find((femaleName) => femaleName === name);
}

async function pickFormsId(forms) {
  const res = await Promise.all(forms.map(async (url) => {
    const data = await (await fetch(url)).json();
    const {
      sprites,
      pokemon,
      name,
      form_names: formNames,
    } = data;

    if (checkFemalCase(name)) {
      const sprityMale = sprites.front_default;
      const sprityFemale = sprites.front_female;

      return [
        {
          name: {
            en: 'male',
            ko: '수컷의 모습',
          },
          id: sprityMale.split('/').at(-1).split('.')[0],
        },
        {
          name: {
            en: 'female',
            ko: '암컷의 모습',
          },
          id: `female/${sprityFemale.split('/').at(-1).split('.')[0]}`,
        },
      ];
    }

    const formName = findFormName(formNames);

    if (sprites.front_default) {
      const sprity = sprites.front_default;
      const id = sprity.split('/').at(-1).split('.')[0];
      return {
        name: formName,
        id,
      };
    }

    const id = pokemon.url.split('/').at(-2);
    return {
      name: formName,
      id,
    };
  }));

  return res.flat();
}

export default async function pickForms(varieties, forms) {
  const speciesVarietiesFormUrls = await pickSpeciesVarietiesFormUrls(varieties);
  const formUrls = forms.map(({ url }) => url);
  const totalUrls = [...new Set([...speciesVarietiesFormUrls, ...formUrls])];
  const formData = await pickFormsId(totalUrls);

  return formData;
}
