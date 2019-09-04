const router = require("express").Router();
const storyRoutes = require("./stories");
const inProgressRoutes = require("./inProgress");



// Story routes
router.use("/stories", storyRoutes);
router.use("/inProgress", inProgressRoutes);


module.exports = router;
