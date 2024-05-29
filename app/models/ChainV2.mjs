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

const ChainV2Model = mongoose.models.ChainV2 || mongoose.model('ChainV2', chainScema);

export default ChainV2Model;
