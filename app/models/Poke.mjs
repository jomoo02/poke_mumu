import mongoose from 'mongoose';

const pokeScema = new mongoose.Schema({
  id: Number,
  no: Number,
  key: String,
  types: Array,
  sprity: String,
  name: Object,
  form: Object,
  order: {
    type: Number,
    unique: true,
  },
});

const PokeModel = mongoose.models.Poke || mongoose.model('Poke', pokeScema);

export default PokeModel;
