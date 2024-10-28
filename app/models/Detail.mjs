import mongoose from 'mongoose';

// type PokedexNumber = {
//   entryNumber: number;
//   pokedex: string;
// };

const VersionMovesSchema = new mongoose.Schema({
  version: String,
  versionMoves: {
    level: Array,
    machine: Array,
    egg: Array,
    reminder: Array,
    pre: Array,
  },
});

const GenMovesSchema = new mongoose.Schema({
  gen: Number,
  genMoves: [VersionMovesSchema],
});

const detailScema = new mongoose.Schema({
  pokeKey: String,
  abilities: Array,
  stats: Object, // 삭제
  moves: [GenMovesSchema],
  forms: Array,
  speciesName: Object,

  pokedexNumbers: Array,
  chainIndex: Number,
  breeding: Object,
  detail: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model('Detail', detailScema);

export default DetailModel;
