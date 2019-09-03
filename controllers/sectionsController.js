const db = require("../models");

module.exports = {
    updateStory: function (req, res) {
        db.Section.
            create(req.body)
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
                    });
            })
    }
};