const db = require("../models");

// Defining methods for the storiesController
module.exports = {
  findAll: function(req, res) {
    db.Story
      .find()
      .sort({ date: -1 })
      .populate("user")
      .then(dbModel => res.json(dbModel))
      // .then(console.log(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("Stories Controller: ")
    console.log(req.params.id)
    db.Story
    .findById(req.params.id)
    .populate("plot_point")
    .populate("midpoint")
    .populate("climax")
    .populate("resolution")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  createStory: function(req, res) {
    let newStory = {
      title: req.body.title,
      genre: req.body.genre,
      setting: req.body.setting,
      user: req.body.user
    }
    db.Story
      .create(newStory)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Story
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Story
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
