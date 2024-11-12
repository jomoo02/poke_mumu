'use server';

import dbConnect from '@/app/api/db/connect';
import PokeV2Model from '@/app/models/PokeV2';
import type { Poke } from '@/app/models/poke.type';

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
  // const surroundingPokes: Record<'before' | 'next', Poke | undefined> = {
  //   before: undefined,
  //   next: undefined,
  // };

  let beforeOrder = Number(order) - 1;
  let nextOrder = Number(order) + 1;

  if (order === 844) {
    beforeOrder = 843;
    nextOrder = 848;
  }

  if (order === 848) {
    beforeOrder = 844;
    nextOrder = 852;
  }

  try {
    await dbConnect();

    const projection = {
      _id: 0,
    };

    const beforePoke = await PokeV2Model
      .findOne({ order: beforeOrder }, projection)
      .lean<Poke>();

    const nextPoke = await PokeV2Model
      .findOne({ order: nextOrder }, projection)
      .lean<Poke>();

    return {
      before: beforePoke,
      next: nextPoke,
    };

    // if (beforePoke) {
    //   surroundingPokes.before = beforePoke;
    // } if (nextPoke) {
    //   surroundingPokes.next = nextPoke;
    // }
    // return surroundingPokes;
  } catch (error) {
    console.error(error);
    return {};
    // return surroundingPokes;
  }
}
