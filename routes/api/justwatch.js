const router = require("express").Router();
const jwController = require("../../controllers/JWcontroller");

router
  .route("/")
  .get(jwController.findByTitle);

module.exports = router;