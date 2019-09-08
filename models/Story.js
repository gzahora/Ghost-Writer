const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true, min: 5, max: 40},
  genre: { type: String, required: true },
  setting: { type: String, required: true },
  plot_point: { type: Schema.Types.ObjectId, ref: "Section" },
  midpoint: { type: Schema.Types.ObjectId, ref: "Section" },
  climax: { type: Schema.Types.ObjectId, ref: "Section" },
  resolution: { type: Schema.Types.ObjectId, ref: "Section" },
  active: {type: Boolean, default: true}
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;