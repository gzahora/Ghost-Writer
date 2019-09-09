const db = require("../models");
// var exists = false;

// function sectionExists(section, storyId) {
//   console.log(`Section is ${section} and story ID is ${storyId}`);
//   return db.Story
//       .find( { [section]: { $exists: true }, _id: storyId } )
//       .then(dbModel =>  {
//         if (dbModel.length === 0) {
//           exists = true;
//         }
//         console.log(exists);
//         return exists;
//       }).catch(err => res.status(422).json(err));
// }

// Defining methods for the storiesController
module.exports = {
  findAll: function(req, res) {
    db.Story
      .find()
      .sort({ date: -1 })
      .populate("user")
      .populate({
        path: "plot_point",
        populate: {
          path: "user"
        }
      })
      .populate({
        path: "midpoint",
        populate: {
          path: "user"
        }
      })
      .populate({
        path: "climax",
        populate: {
          path: "user"
        }
      })
      .populate({
        path: "resolution",
        populate: {
          path: "user"
        }
      })
      .then(dbModel => res.json(dbModel))
      // .then(console.log(res))
      .catch(err => res.status(422).json(err));
  },
  findNextSection: function(req, res) {
    let storyId = req.params.id;
    if (!sectionExists("plot_point", storyId)) {
      console.log("THERE IS NO PLOT POINT");
      return res.json({section: "plot_point"})
    } else if (!sectionExists("midpoint", storyId)) {
      console.log("THERE IS NO MIDPOINT")
      return res.json({section: "midpoint"})
    } else if (!sectionExists("climax", storyId)) {
      console.log("THERE IS NO CLIMAX");
      return res.json({section: "climax"})
    } else if (!sectionExists("resolution", storyId)) {
      console.log("THERE IS NO RESOLUTION");
      return res.json({section: "resolution"})
    }
  },

  findById: function(req, res) {
    // console.log("Stories Controller: ")
    // console.log(req.params.id)
    db.Story
    .findById(req.params.id)
    .populate("user")
    .populate({
      path: "plot_point",
      populate: {
        path: "user"
      }
    })
    .populate({
      path: "midpoint",
      populate: {
        path: "user"
      }
    })
    .populate({
      path: "climax",
      populate: {
        path: "user"
      }
    })
    .populate({
      path: "resolution",
      populate: {
        path: "user"
      }
    })
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
