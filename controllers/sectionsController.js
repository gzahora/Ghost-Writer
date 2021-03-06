const db = require("../models");

module.exports = {
    updateStory: function (req, res) {
        db.Section
            .create(req.body)
            .then(function (sectionResponse) {
                let active = true;
                if (sectionResponse.section_name === "resolution") {
                    active = false;
                }
                return db.Story.findOneAndUpdate(
                    {
                        _id: req.body.story_id
                    }, {
                        $set: {
                            [req.body.section_name]: sectionResponse._id,
                            active: active
                        }
                    }, {
                        new: true
                    })
                    .catch(err => res.status(422).json(err));
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};