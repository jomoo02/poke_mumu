import mongoose from 'mongoose';
import type { PokeDetail } from './detail.type';

const detailScema = new mongoose.Schema<PokeDetail>({
  pokeKey: String,
  abilities: Array,
  // stats: Object, // 삭제
  moves: Array,
  forms: Array,
  speciesName: Object,
  chainIndex: Number,
  breeding: Object,
  detail: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model<PokeDetail>('Detail', detailScema);

export default DetailModel;
