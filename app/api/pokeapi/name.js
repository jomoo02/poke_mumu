function findLanguageName(names, targetLanguage) {
  return names.find(({ language }) => language.name === targetLanguage)?.name;
}

export function filterName(names) {
  const nameEn = findLanguageName(names, 'en');

  if (nameEn.toLowerCase() === 'percharunt') {
    return {
      en: nameEn,
      ko: '복숭악동',
    };
  }

  const nameKo = findLanguageName(names, 'ko');

  return {
    en: nameEn,
    ko: nameKo,
  };
}

export function checkMegaPokeName(name, form) {
  console.log('name: ', name, 'form:', form);
  if (form?.en?.includes('Mega')) {
    return {
      form: {
        en: 'mega',
        ko: '메가진화',
      },
      name: {
        en: form.en,
        ko: form.ko,
      },
    };
  }
  return {
    form,
    name,
  }
}
