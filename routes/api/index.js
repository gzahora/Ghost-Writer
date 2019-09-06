const router = require("express").Router();
const storyRoutes = require("./stories");
const inProgressRoutes = require("./inProgress");
const sectionsRoutes = require("./sections");
const usersRoutes = require("./users");



// Story routes
router.use("/stories", storyRoutes);
router.use("/inProgress", inProgressRoutes);
router.use("/sections", sectionsRoutes);
router.use("/users", usersRoutes);


module.exports = router;
