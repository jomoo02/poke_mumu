import mongoose from 'mongoose';
import { LanguageContent } from '@/app/types/languageContent.type';
import type { EggGroup } from '@/app/data/eggGroup';
import type { GrowthRate } from '@/app/data/growthRate';
import type { Stat } from '@/app/data/stats';
import type { LocalePokedex } from '@/app/data/localePokedex';
import type { Moves } from '@/app/pokedex/[pokeKey]/types/moves';

export type Ability = {
  isHidden: boolean;
  name: LanguageContent;
  flavorText: LanguageContent;
};

type Form = {
  name: LanguageContent;
  id: string;
};

export type PokeDetail = {
  pokeKey: string;
  chainIndex: number;
  abilities?: Ability[];
  moves?: Moves;
  forms?: Form[];
  speciesName?: LanguageContent;
  breeding?: {
    eggGroups: EggGroup[];
    hatchCounter: number;
    genderRate: number;
  };
  detail?: {
    genera: LanguageContent;
    height: number;
    weight: number;
    captureRate: number;
    growthRate: GrowthRate;
    effortStats: {
      stat: Stat;
      value: number;
    }[];
  };
  pokedexNumbers?: {
    pokedex: LocalePokedex,
    entryNumber: number;
  }[];
};

const detailScema = new mongoose.Schema<PokeDetail>({
  pokeKey: String,
  abilities: Array,
  // stats: Object, // 삭제
  moves: Array,
  forms: Array,
  speciesName: Object,

  pokedexNumbers: Array,
  chainIndex: Number,
  breeding: Object,
  detail: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model<PokeDetail>('Detail', detailScema);

export default DetailModel;
