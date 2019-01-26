const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const router = require("../Dream-Stream/dreamstream/src/pages/routes/apis/index");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dreamstream/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dstest");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
