require('dotenv').config();
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
app.use(cookieParser()); // Add this after you initialize express.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.body.nToken === "undefined" || req.body.nToken === null) {
    req.user = null;
  } else {
    var token = req.body.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);
// Set Hero related routes
require("./Hero/hero.route")(app);

// Set Player related routes
require("./Player/player.routes")(app);

// Set User related routes
require("./User/user.routes")(app);

// Set db
require("./Database/overwatch-db");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
