import mongoose from 'mongoose';
import type { LocalPokedex } from '@/app/data/localPokedex';
import { LanguageContent } from '../types/languageContent.type';
import { PokeType } from '../data/pokeType';

type Stats = {
  stat: string;
  value: number;
};

export type PokedexNumber = {
  pokedex: LocalPokedex,
  entryNumber: number;
};

export type Poke = {
  pokeKey: string;
  sprite: string;
  name: LanguageContent;
  form: LanguageContent;
  types: PokeType[];
  stats: Stats[];
  no: string;
  order: number;
  pokedexNumbers: PokedexNumber[];
};

export type CardPoke = Required<Poke>;

const PokeV2Scema = new mongoose.Schema<Poke>({
  sprite: String,
  name: Object,
  types: Array,
  form: Object,
  stats: Object,
  pokeKey: String,
  no: String,
  order: Number,
  pokedexNumbers: Array,
});

const PokeV2Model = mongoose.models?.PokeV2 || mongoose.model<Poke>('PokeV2', PokeV2Scema);

export default PokeV2Model;
