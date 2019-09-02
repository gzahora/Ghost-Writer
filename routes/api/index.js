const router = require("express").Router();
const storyRoutes = require("./stories");

// Story routes
router.use("/stories", storyRoutes);

module.exports = router;
