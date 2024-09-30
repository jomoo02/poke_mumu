import mongoose from 'mongoose';

type LocaleContent = {
  en: string;
  ko: string;
};

type Pokedex = {
  entryNumber: number;
  pokedex: string;
};

interface Poke {
  id: number;
  no: number;
  types: string[];
  sprity: string;
  name: LocaleContent;
  form: LocaleContent;
  order: number;
  pokeKey: string;
  chainIndex: number;
  height: number;
  weight: number;
  genera: LocaleContent;
  eggGroups?: string[];
  genderRate: number;
  captureRate: number;
  growthRate: string;
  hatchCounter: number;
  pokedexNumbers: Pokedex[],
}

const pokeSchema = new mongoose.Schema({
  id: Number,
  no: Number,
  types: Array,
  sprity: String,
  name: Object,
  form: Object,
  order: {
    type: Number,
    unique: true,
    required: true,
  },
  pokeKey: {
    type: String,
    unique: true,
    required: true,
  },
  chainIndex: Number,
  height: Number,
  weight: Number,
  genera: Object,
  eggGroups: Array,
  genderRate: Number,
  captureRate: Number,
  growthRate: String,
  hatchCounter: Number,
  pokedexNumbers: Array,
});

const PokeModel = mongoose.models?.Poke || mongoose.model<Poke>('Poke', pokeSchema);

export default PokeModel;
