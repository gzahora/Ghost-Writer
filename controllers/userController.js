const db = require("../models");

module.exports = {

findUser: function(req, res) {
    db.User.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
}