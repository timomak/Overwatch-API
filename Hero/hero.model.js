const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  health: { type: String, required: true },
  armour: { type: String, required: true },
  shield: { type: String, required: true },
  real_name: { type: String, required: true },
  age: { type: String, required: false },
  height: { type: String, required: false },
  affiliation: { type: String, required: false },
  base_of_operations: { type: String, required: false },
  difficulty: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model("Hero", HeroSchema);
