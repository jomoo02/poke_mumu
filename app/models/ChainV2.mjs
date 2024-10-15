import mongoose from 'mongoose';

const chainScema = new mongoose.Schema({
  index: {
    type: Number,
    unique: true,
  },
  chain: Array,
  ids: Array,
  maxWidth: Number,
  maxDepth: Number,
});

const ChainModel = mongoose.models.Chain || mongoose.model('Chain', chainScema);

export default ChainModel;
