const db = require("../models");

module.exports = {
    updateStory: function (req, res) {
        db.Section
            .save(req.body)
            .then(function (sectionResponse) {
                return db.Story.findOneAndUpdate(
                    {
                        _id: req.body.story_id
                    }, {
                        $set: {
                            [req.body.section_name]: sectionResponse._id
                        }
                    }, {
                        new: true
                    })
                    // .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};