const path = require("path");
const router = require("express").Router();
const searchRoutes = require("./search");
const tvmRoutes =require("./TVM");


router.use("/search", searchRoutes);
router.use("/tvm", tvmRoutes);

module.exports = router;