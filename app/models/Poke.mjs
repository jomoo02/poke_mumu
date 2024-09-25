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
  chainIndex: Number,
  height: Number,
  weight: Number,

  genera: Object,
  eggGroups: Array,
  genderRate: Number,
  captureRate: Number,
  growthRate: String,
  hatchCounter: Number,
  pokedexNumbers: Array,
});

const PokeModel = mongoose.models.Poke || mongoose.model('Poke', pokeScema);

export default PokeModel;
