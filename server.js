require('dotenv').config();
const express = require('express')
const app = express()


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
