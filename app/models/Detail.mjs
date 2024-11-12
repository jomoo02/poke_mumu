import mongoose from 'mongoose';

const detailScema = new mongoose.Schema({
  pokeKey: String,
  abilities: Array,
  stats: Object, // 삭제
  moves: Array,
  forms: Array,
  speciesName: Object,

  pokedexNumbers: Array,
  chainIndex: Number,
  breeding: Object,
  detail: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model('Detail', detailScema);

export default DetailModel;
