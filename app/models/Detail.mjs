import mongoose from 'mongoose';

const detailScema = new mongoose.Schema({
  // id: Number,
  // chainIndex: Number,
  pokeKey: String,
  abilities: Array,
  stats: Object,
  moves: Array,
  forms: Array,
  speciesName: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model('Detail', detailScema);

export default DetailModel;
