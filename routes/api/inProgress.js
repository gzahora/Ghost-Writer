const router = require("express").Router();
const storiesController = require("../../controllers/storiesController");

// Matches with "/api/inProgress"
router.route("/")
  .get(storiesController.findAll)
  .post(storiesController.createStory);

// Matches with "/api/inProgress/:id"
router
  .route("/:id")
  .get(storiesController.findById)
  .put(storiesController.update)
  .delete(storiesController.remove);

module.exports = router;