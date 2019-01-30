const path = require("path");
const router = require("express").Router();
const searchRoutes = require("./search");
const tvmRoutes =require("./tvm");
const jwRoutes = require("./justwatch");


router.use("/search", searchRoutes);
router.use("/tvm", tvmRoutes);
router.use("/justwatch", jwRoutes);

module.exports = router;