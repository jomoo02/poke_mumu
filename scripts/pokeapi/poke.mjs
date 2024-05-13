import fetchForm from './form.mjs';
import fetchVarieties from './variety.mjs';
import { filterName, checkMegaPokeName } from './name.mjs';

const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPoke(url, names, no) {
  const data = await (await fetch(url)).json();

  const {
    sprites, id, forms, name: nameEn, types: typesObj,
  } = data;

  const types = typesObj.map(({ type }) => type.name);
  const nameData = filterName(names);
  const form = await fetchForm(nameEn, forms);
  const { name, form: checkedForm } = checkMegaPokeName(nameData, form);

  return {
    id,
    no,
    name,
    types,
    sprity: sprites?.front_default.split('/').at(-1),
    form: checkedForm,
  };
}

async function getPokeData(no) {
  const data = await (await fetch(`${POKE_URL}${no}`)).json();
  const { species } = data;

  const speciesData = await (await fetch(species.url)).json();
  const { varieties, names } = speciesData;

  const pokes = await Promise.all(
    fetchVarieties(varieties).map(({ pokemon }) => fetchPoke(pokemon.url, names, no)),
  );
  return pokes;
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
