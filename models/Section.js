const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  section_name: { type: String, required: true },
  section_text: { type: String, required: true },
});

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;