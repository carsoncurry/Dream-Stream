const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    name: { type: String, required: true },
    type: String,
    language: String,
    genres: [String],
    officialSite: String,
    network: String,
    webChannel: String,
        // might need a mongoose-validator
    image: String,
    summary: String
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;