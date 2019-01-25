const router = require("express").Router();
const tvmController = require("../../TVMcontroller");

router
  .route("/")
  .get(tvmController.findByTitle);

module.exports = router;