// import router from express
const router = require("express").Router();

// import routes 
const filmsRoutes = require("./film-routes");
const musicRoutes = require("./music-routes");
const tvRoutes = require("./tv-routes");
const wrestlingRoutes = require("./wrestling-routes");

// use routes
router.use("/films", filmsRoutes);
router.use("/music", musicRoutes);
router.use("/tv", tvRoutes);
router.use("/wrestling", wrestlingRoutes);

// export router
module.exports = router;
