const router = require("express").Router();
const sectionsController = require("../../controllers/sectionsController");

// Matches with "/api/sections/:id"
router.route("/:id")
  .post(sectionsController.updateStory)

  module.exports = router;