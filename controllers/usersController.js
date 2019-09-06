const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .find()
      .then(dbModel => res.json(dbModel))
      // .then(console.log(res))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("Users Controller: ")
    console.log(req.params.id)
    db.User
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};