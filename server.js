"use strict";
const log = global.console.log;

// dependencies
require("dotenv").config();
const db = require("./models"); // requiring dir defaults to index.js
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// express app data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// route controller
require("./controllers/router")(app);

const PORT = process.env.PORT || process.env.EXPRESS_PORT || 8080;

// sequelize sync table models
db.sequelize.sync().then(function () {
  // express listener
  app.listen(PORT, function () {
    log(`\nexpress app listening on PORT ${PORT}`);
  });
});
