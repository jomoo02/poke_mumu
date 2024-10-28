import mongoose from 'mongoose';
import { LanguageContent } from '../types/languageContent.type';
import { PokeType } from '../data/pokeType';

type Stats = {
  stat: string;
  value: number;
};

export type Poke = {
  pokeKey: string;
  sprite?: string;
  name?: LanguageContent;
  form?: LanguageContent;
  types?: PokeType[];
  stats?: Stats[];
  no?: string;
  order?: number;
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
});

const PokeV2Model = mongoose.models?.PokeV2 || mongoose.model<Poke>('PokeV2', PokeV2Scema);

export default PokeV2Model;
