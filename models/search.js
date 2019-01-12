const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    status: Boolean,
    firstAired: Date,
    channel: { type: String, required: true },
    runtime: Number,
    airDay: String,
    airTime: TimeRanges,
    rating: String,
    genres: [...String],
    tags: [...String],
    overview: String
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;