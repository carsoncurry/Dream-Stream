const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    name: { type: String, required: true },
    type: String,
    language: String,
    genres: [...String],
    officialSite: String,
    network: {
        name: String, required: true
    },
    webChannel: {
        name: String, required: true
    },
    image: {
        // might need a mongoose-validator
        medium: String
    },
    summary: String
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;