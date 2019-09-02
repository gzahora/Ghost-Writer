const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: { type: String, required: true },
  contributors: { type: String, required: true },
  story_section: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Stories = mongoose.model("Stories", storySchema);

module.exports = Stories;