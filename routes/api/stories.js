const router = require("express").Router();
const storiesController = require("../../controllers/storiesController");

// Matches with "/api/stories"
router.route("/")
  .get(storiesController.findAll)
  .post(storiesController.createStory);

// Matches with "/api/stories/:id"
router.route("/:id")
  .get(storiesController.findById)
  .put(storiesController.update)
  .delete(storiesController.remove);

// Matches with "/api/newStory"
router.route("/newStory")
.get(storiesController.findAll)
.post(storiesController.createStory);

module.exports = router;