import mongoose from 'mongoose';
import type { Chain } from './chain.type';

const chainSchema = new mongoose.Schema<Chain>({
  index: {
    type: Number,
    unique: true,
  },
  chain: Array,
  ids: Array,
  maxWidth: Number,
  maxDepth: Number,
}, { collection: 'chain' });

const ChainModel = mongoose.models.chain || mongoose.model<Chain>('chain', chainSchema);

export default ChainModel;
