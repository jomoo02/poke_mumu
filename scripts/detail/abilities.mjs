import axios from 'axios';

function findLanguageName(names, targetLanguage) {
  return names.find(({ language }) => (
    language.name === targetLanguage
  ))?.name;
}

function findLanguageFlavorText(flavorTextEntries, targetLanguage) {
  const targetFlavorTexts = flavorTextEntries.filter(({ language }) => (
    language.name === targetLanguage
  ));

  const findTargetVersionFlavorText = (targetVersion) => (
    targetFlavorTexts.find(({ version_group: version }) => version?.name === targetVersion)
  );

  const svFlavorText = findTargetVersionFlavorText('scarlet-violet');

  if (svFlavorText) {
    return svFlavorText.flavor_text;
  }

  const ssFlavorText = findTargetVersionFlavorText('sword-shield');

  if (ssFlavorText) {
    return ssFlavorText.flavor_text;
  }

  return findTargetVersionFlavorText('ultra-sun-ultra-moon')?.flavor_text || '';
}

async function fetchAbility(abilityUrl, isHidden) {
  try {
    // const data = await (await fetch(abilityUrl)).json();
    const { data } = await axios(abilityUrl);
    const {
      names,
      flavor_text_entries: flavorTextEntires,
    } = data;

    const nameEn = findLanguageName(names, 'en') || 'none';
    const flavorTextEn = findLanguageFlavorText(flavorTextEntires, 'en') || 'none';

    return {
      isHidden,
      name: {
        en: nameEn,
        ko: findLanguageName(names, 'ko') || nameEn,
      },
      flavorText: {
        en: flavorTextEn,
        ko: findLanguageFlavorText(flavorTextEntires, 'ko') || flavorTextEn,
      },
    };
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export default async function fetchAbilities(abilities) {
  const abilitySet = new Set();

  const uniqueAbilities = abilities
    .filter(({ ability }) => {
      const { url } = ability;

      if (!abilitySet.has(url)) {
        abilitySet.add(url);
        return true;
      }
      return false;
    })
    .map(({ ability: { url }, is_hidden: isHidden }) => (
      { url, isHidden }
    ));

  try {
    return Promise.all(uniqueAbilities.map(({ url, isHidden }) => (
      fetchAbility(url, isHidden)
    )));
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
