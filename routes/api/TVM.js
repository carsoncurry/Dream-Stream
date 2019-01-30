const router = require("express").Router();
const tvmController = require("../../controllers/TVMcontroller");

router
  .route("/")
  .get(tvmController.findByTitle);

module.exports = router;