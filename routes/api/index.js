const router = require("express").Router();
const storyRoutes = require("./stories");
const inProgressRoutes = require("./inProgress");
const sectionsRoutes = require("./sections");
<<<<<<< HEAD

=======
>>>>>>> c0f9e435ffaeb02c015090d8fc99e54daee2b091


// Story routes
router.use("/stories", storyRoutes);
router.use("/inProgress", inProgressRoutes);
router.use("/sections", sectionsRoutes);


module.exports = router;
