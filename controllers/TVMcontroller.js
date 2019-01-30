const axios =require("axios");
const db = require("../models");

module.exports = {
    findByTitle: function(req, res) {
        const { query: params } = req;
        axios
            .get("http://api.tvmaze.com/singlesearch/shows?q=", {
                params
            })
            .then(res =>
                res.data.items.filter(
                    result =>
                    result.name &&
                    result.type &&
                    result.language &&
                    result.genre &&
                    result.officialSite &&
                    result.network.name &&
                    result.webChannel.name &&
                    result.image.original &&
                    result.summary
                )
            )
            .then(
                console.log(res)
            )
            .then(search => res.json(search))
            .catch(err => res.status(422).json(err));
    }
};