'use server';

import PokeModel from '@/app/models/Poke.mjs';

export default async function createPoke(pokeData) {
  const {
    name, sprity, types, id, no, form, key,
  } = pokeData;

  try {
    const findPokes = await PokeModel.find({ id }).lean();

    if (findPokes.find((poke) => poke.key === key)) {
      console.log('이미 존재하는 포켓몬');
      return false;
    }

    const pokeModel = new PokeModel({
      id,
      no,
      key,
      types,
      form,
      name,
      sprity,
    });

    await PokeModel.create(pokeModel);
  } catch (error) {
    console.log(error);
  }
  console.log(`${name.ko} 저장 완료`);
  return true;
}
