function findSelectLanguageName(names, selectLanguage) {
  return names.find(({ language }) => language.name === selectLanguage)?.name;
}

function findSelectLanguageFlavorText(flavorTextEntries, selectLanguage) {
  const targetTexts = flavorTextEntries.filter(({ language }) => language.name === selectLanguage);

  const svFlavorText = targetTexts.find(({ version_group: version }) => version.name === 'scarlet-violet');

  if (svFlavorText) {
    return svFlavorText.flavor_text;
  }

  const ssFalvorText = targetTexts.find(({ version_group: version }) => version.name === 'sword-shield');

  if (ssFalvorText) {
    return ssFalvorText.flavor_text;
  }

  return '';
}

async function getAbilitiesInfo(abilityUrl, isHidden) {
  const data = await (await fetch(abilityUrl)).json();
  const { names, flavor_text_entries: flavorTextEntires } = data;

  const nameEn = findSelectLanguageName(names, 'en') || 'none';
  const nameKo = findSelectLanguageName(names, 'ko') || nameEn;

  const name = {
    en: nameEn,
    ko: nameKo,
  };

  const flavorTextEn = findSelectLanguageFlavorText(flavorTextEntires, 'en') || 'none';
  const flavorTextKo = findSelectLanguageFlavorText(flavorTextEntires, 'ko') || flavorTextEn;

  const flavorText = {
    en: flavorTextEn,
    ko: flavorTextKo,
  };

  return {
    name,
    flavorText,
    isHidden,
  };
}

export default async function filterAbilities(abilities) {
  const abilitySet = new Set();
  const uniqueAbilities = abilities.filter(({ ability }) => {
    const { url } = ability;

    if (!abilitySet.has(url)) {
      abilitySet.add(url);
      return true;
    }
    return false;
  }).map(({ ability, is_hidden: isHidden }) => ({ url: ability.url, isHidden }));

  const abilitiesInfo = await Promise.all(uniqueAbilities.map(({ url, isHidden }) => (
    getAbilitiesInfo(url, isHidden)
  )));

  return abilitiesInfo;
}
