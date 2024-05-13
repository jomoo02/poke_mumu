import mongoose from 'mongoose';

const detailScema = new mongoose.Schema({
  id: Number,
  abilities: Array,
  stats: Object,
  moves: Array,
  forms: Array,
  chainIndex: Number,
  speciesName: Object,
});

const DetailModel = mongoose.models.Detail || mongoose.model('Detail', detailScema);

export default DetailModel;
