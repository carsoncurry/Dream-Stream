const router = require("express").Router();
const tvmController = require("../../controllers/TVMcontroller");

router
  .route("/tvm")
  .get(tvmController.findByTitle);

module.exports = router;