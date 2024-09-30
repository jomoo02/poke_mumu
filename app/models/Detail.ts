import mongoose from 'mongoose';

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
  stats: Object,
  moves: [GenMovesSchema],
  forms: Array,
  speciesName: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model('Detail', detailScema);

export default DetailModel;
