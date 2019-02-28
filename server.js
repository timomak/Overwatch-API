const express = require('express')
const app = express()


// Set Hero related routes
require("./Hero/hero.route")(app);

// Set db
require("./Database/overwatch-db");

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
