import mongoose from 'mongoose';
import { LanguageContent } from '../types/languageContent.type';
import { PokeTypeItem } from '../data/pokeType';

type Stats = {
  stat: string,
  value: number,
};

interface PokeV2 {
  sprite: string;
  name: LanguageContent;
  types: PokeTypeItem[];
  form: LanguageContent;
  stats: Stats[];
  pokeKey: string;
  no: string;
  order: number;
}

const PokeV2Scema = new mongoose.Schema({
  sprite: String,
  name: Object,
  types: Array,
  form: Object,
  stats: Object,
  pokeKey: String,
  no: String,
  order: Number,
});

const PokeV2Model = mongoose.models?.PokeV2 || mongoose.model<PokeV2>('PokeV2', PokeV2Scema);

export default PokeV2Model;
