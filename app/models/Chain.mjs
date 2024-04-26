import mongoose from 'mongoose';

const chainScema = new mongoose.Schema({
  chainIndex: {
    type: Number,
    unique: true,
  },
  chain: Array,
  ids: Array,
});

const ChainModel = mongoose.models.Chain || mongoose.model('Chain', chainScema);

export default ChainModel;
