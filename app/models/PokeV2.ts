import mongoose from 'mongoose';
import type { LocalPokedex } from '@/app/data/localPokedex';
import type { Poke } from './poke.type';

export type PokedexNumber = {
  pokedex: LocalPokedex,
  entryNumber: number;
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
