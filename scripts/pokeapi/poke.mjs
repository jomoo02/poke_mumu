import filterForm from './form.mjs';
import filterVarieties from './variety.mjs';
import { filterName, checkMegaPokeName } from './name.mjs';

const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPoke(url, names, no) {
  const data = await (await fetch(url)).json();

  const {
    sprites, id, forms, name: nameEn, types: typesObj,
  } = data;

  const types = typesObj.map(({ type }) => type.name);
  const nameData = filterName(names);
  const formData = await filterForm(nameEn, sprites, forms);

  return formData.map(({ sprity, form }) => {
    const { name, form: checkedForm } = checkMegaPokeName(nameData, form);
    const key = `${id}-${form.en}`;
    const sprityPiece = sprity.split('/').at(-1);

    return {
      id,
      no,
      key,
      name,
      types,
      sprity: sprityPiece,
      form: checkedForm,
    };
  });
}

async function getPokeData(no) {
  const data = await (await fetch(`${POKE_URL}${no}`)).json();
  const { species } = data;

  const speciesData = await (await fetch(species.url)).json();
  const { varieties, names } = speciesData;

  const pokes = await Promise.all(
    filterVarieties(varieties).map(({ pokemon }) => fetchPoke(pokemon.url, names, no)),
  );

  return [].concat(...pokes);
}

export default async function getPokes(no) {
  const result = [];

  const start = (no * 100) + 1;
  const end = start + 100;

  for (let i = start; i < end; i += 1) {
    if (i > 1025) {
      break;
    }
    result.push(getPokeData(i));
  }
  const pokes = await Promise.all(result);

  return [].concat(...pokes);
}
