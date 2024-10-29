import React from 'react';
import './styles/information.css';
import { getPoke, getPokeDetail } from '../utils/get';
import { headerKeys } from '../data/header';

interface PokeInformationProps {
  pokeKey: string;
}

export default async function PokeInformation({ pokeKey }: PokeInformationProps) {
  const [poke, pokeDetail] = await Promise.all([
    getPoke(pokeKey),
    getPokeDetail(pokeKey),
  ]);

  if (!poke || !pokeDetail) {
    return null;
  }

  const {
    types,
    sprite,
    name,
    pokedexNumbers,
  } = poke;

  const type = types[0];

  const {
    breeding,
    detail,
  } = pokeDetail;

  if (!breeding || !detail || !pokedexNumbers) {
    return null;
  }

  const headerKey = headerKeys.information;
}
