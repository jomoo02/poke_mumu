import mongoose from 'mongoose';

const pokeScema = new mongoose.Schema({
  id: Number,
  no: Number,
  types: Array,
  sprity: String,
  name: Object,
  form: Object,
  order: {
    type: Number,
    unique: true,
  },
  pokKey: String,
});

const PokeModel = mongoose.models.Poke || mongoose.model('Poke', pokeScema);

export default PokeModel;
