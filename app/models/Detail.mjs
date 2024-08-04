import mongoose from 'mongoose';

const MoveSchema = new mongoose.Schema({
  accuracy: Number,
  power: Number,
  damage_class: String,
  type: String,
  name: {
    en: String,
    ko: String,
  },
});

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
  // id: Number,
  // chainIndex: Number,
  pokeKey: String,
  abilities: Array,
  stats: Object,
  moves: [GenMovesSchema],
  forms: Array,
  speciesName: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model('Detail', detailScema);

export default DetailModel;
