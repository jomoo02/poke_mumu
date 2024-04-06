const defaultFormSpecies = [
  'castform',
  'koraidon',
  'miraidon',
  'average',
  // 'pumpkaboo',
  // 'gourgeist',
];

const exclusionFormSpecies = [
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
];

const genderDistinctionSpecies = [
  'frillish',
  'jellicent',
  'unfezant',
  'pyroar',
];

function findLanguageName(names, targetLanguage) {
  return names.find(({ language }) => language.name === targetLanguage)?.name || 'default';
}

function translateFormNameKo(form, formNames) {
  if (form === 'hisui') {
    return '히스이의 모습';
  }

  if (form === 'paldea') {
    return '팔데아의 모습';
  }

  // if (form === 'paldea-combat-breed') {
  //   return '팔데아의 모습 / 컴뱃종';
  // }
  // if (form === 'paldea-blaze-breed') {
  //   return '팔데아의 모습 / 블레이즈종';
  // }
  // if (form === 'paldea-aqua-breed') {
  //   return '팔데아의 모습 / 워터종';
  // }

  if (form === 'male') {
    return '수컷의 모습';
  }
  if (form === 'female') {
    return '암컷의 모습';
  }

  if (form === 'incarnate') {
    return '화신폼';
  }
  if (form === 'therian') {
    return '영물폼';
  }

  if (form === 'green-plumage') {
    return '그린 페더';
  }
  if (form === 'blue-plumage') {
    return '블루 페더';
  }
  if (form === 'yellow-plumage') {
    return '옐로 페더';
  }
  if (form === 'white-plumage') {
    return '화이트 페더';
  }

  if (form === 'zero') {
    return '나이브폼';
  }
  if (form === 'hero') {
    return '마이티폼';
  }

  if (form === 'curly') {
    return '젖힌 모습';
  }
  if (form === 'droopy') {
    return '늘어진 모습';
  }
  if (form === 'stretchy') {
    return '뻗은 모습';
  }

  if (form === 'two-segment') {
    return '두 마디폼';
  }

  if (form === 'chest') {
    return '상자폼';
  }
  if (form === 'roaming') {
    return '도보폼';
  }

  if (form === 'terastal') {
    return '테라스탈폼';
  }
  if (form === 'stellar') {
    return '스텔라폼';
  }

  if (form === 'family-of-four') {
    return '네 식구';
  }

  if (form === 'origin') {
    return '오리진폼';
  }

  if (form === 'white-striped') {
    return '백색근의 모습';
  }

  return findLanguageName(formNames, 'ko');
}

async function getForm(formUrl) {
  const data = await (await fetch(formUrl)).json();

  const {
    name,
    sprites,
    form_name: formName,
    form_names: formNames,
    pokemon,
  } = data;

  const form = formName || 'default';
  const formNameEn = findLanguageName(formNames, 'en');
  const sprity = sprites.front_default;

  if (
    formNameEn?.toLowerCase() === name
    || defaultFormSpecies.some((target) => name.includes(target))
  ) {
    return {
      sprity,
      form: {
        en: 'default',
        ko: 'default',
      },
    };
  }

  if (formName === 'paldea-blaze-breed') {
    return {
      sprity,
      form: {
        en: 'Paldean Form / Blaze Breed',
        ko: '팔데아의 모습 / 블레이즈종',
      }
    }
  }

  if (formName === 'paldea-combat-breed') {
    return {
      sprity,
      form: {
        en: 'Paldean Form / Combat Breed',
        ko: '팔데아의 모습 / 컴뱃종',
      },
    }
  }

  if (formName === 'paldea-aqua-breed') {
    return {
      sprity,
      form: {
        en: 'Paldean Form / Aqua Breed',
        ko: '팔데아의 모습 / 워터종',
      },
    };
  }

  if (pokemon?.name === 'darmanitan-galar-zen') {
    return {
      sprity,
      form: {
        en: 'Galarian Form / Zen Mode',
        ko: '가라르의 모습 / 달마 모드',
      }
    }
  }

  if (pokemon?.name === 'terapagos') {
    return {
      sprity,
      form: {
        en: 'Normal Form',
        ko: '노말폼',
      },
    }
  }

  const formNameKo = translateFormNameKo(form, formNames);

  return {
    sprity,
    form: {
      en: formNameEn,
      ko: formNameKo,
    },
  };
}

async function filterForm(nameEn, sprites, forms) {
  const sprity = sprites?.front_default;

  if (exclusionFormSpecies.includes(nameEn)) {
    return [{
      sprity,
      form: {
        en: 'default',
        ko: 'default',
      },
    }];
  }

  if (genderDistinctionSpecies.includes(nameEn)) {
    return [
      {
        sprity,
        form: {
          en: 'male',
          ko: '수컷의 모습',
        },
      },
      {
        sprity: sprites?.front_female,
        form: {
          en: 'female',
          ko: '암컷의 모습',
        },
      },
    ];
  }

  const pokeForms = await Promise.all(forms.map((form) => getForm(form.url)));
  
  return pokeForms.map((form) => ({
    sprity: form.sprity || sprity,
    form: form.form,
  }));
}

export default filterForm;
