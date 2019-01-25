const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/")
    // .get(searchController.findAll)
    // .post(searchController.save);

router.route("/search")
    .get(searchController.findbyId)

router.route("/profile")
    // .get(searchController.findbyId)
    // .delete(searchController.remove);

router.route("/noprofile")
    // .get(searchController.findbyId)
    // .delete(searchController.remove);

router.route("/callback")
    // .get(searchController.findbyId)
    // .delete(searchController.remove);

router.route("*")
    // .get("client/build/index.html")

module.exports = router;