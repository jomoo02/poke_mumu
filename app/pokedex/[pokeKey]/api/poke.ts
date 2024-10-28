'use server';

import dbConnect from '@/app/api/db/connect';
import PokeV2Model, { type Poke } from '@/app/models/PokeV2';

export async function fetchPoke(pokeKey: string) {
  try {
    await dbConnect();

    const query = { pokeKey };
    const projection = { _id: 0 };

    const result = await PokeV2Model
      .findOne(query, projection)
      .lean<Poke>();

    if (result) {
      return result;
    }
    return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function fetchAllPoke() {
  try {
    await dbConnect();

    const query = {};
    const projection = { _id: 0 };

    const result = await PokeV2Model
      .find(query, projection)
      .sort({ order: 1 })
      .lean<Poke[]>();

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchSurroundingPokes(order: number) {
  const surroundingPokes = {
    before: {},
    next: {},
  };

  try {
    await dbConnect();

    const projection = {
      _id: 0,
      pokeKey: 1,
      sprite: 1,
      order: 1,
      name: 1,
      form: 1,
      no: 1,
    };

    const beforePoke = await PokeV2Model
      .findOne({ order: Number(order) - 1 }, projection)
      .lean();

    const nextPoke = await PokeV2Model
      .findOne({ order: Number(order) + 1 }, projection)
      .lean();

    if (beforePoke) {
      surroundingPokes.before = beforePoke;
    } if (nextPoke) {
      surroundingPokes.next = nextPoke;
    }
    return surroundingPokes;
  } catch (error) {
    console.error(error);
    return surroundingPokes;
  }
}
