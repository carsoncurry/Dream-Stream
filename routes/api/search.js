const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/search/save")
    .post(searchController.create);

router.route("/profile")
    .get(searchController.findAll)
    .delete(searchController.remove);

router.route("/noprofile")
    // .get(searchController.findbyId)
    // .delete(searchController.remove);

router.route("*")
    // .get("client/build/index.html")

module.exports = router;