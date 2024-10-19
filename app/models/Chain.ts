import mongoose from 'mongoose';

const chainSchema = new mongoose.Schema({
  index: {
    type: Number,
    unique: true,
  },
  chain: Array,
  ids: Array,
  maxWidth: Number,
  maxDepth: Number,
}, { collection: 'chain' });

const ChainModel = mongoose.models.chain || mongoose.model('chain', chainSchema);

export default ChainModel;
