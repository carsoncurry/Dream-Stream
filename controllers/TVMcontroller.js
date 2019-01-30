const axios =require("axios");
const db = require("../models");

module.exports = {
    findByTitle: function(req, res) {
        const { query: params } = req;
        console.log("controller")
        axios
            .get("https://api.tvmaze.com/singlesearch/shows", {
                params
            })
            .then(results =>
                results.data.filter(
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
            .then(tvmapi =>
                db.Search.find().then(dbSearch =>
                    tvmapi.filter(apisearch =>
                        dbSearch.every(apisearch.id.toString() !== dbSearch.id)
                    )
                )
            )
            .then(search => res.json(search))
            .catch(err => res.status(422).json(err));
    }
};