const Hero = require('./hero.model')

module.exports = function (app) {
    // Get hero
    app.get("/heroes/:heroName", function (req, res) {
      res.send(req.params.heroName)
    });
    // Get
    app.get("/", function (req, res) {
      console.log("it works")
      res.send("It works")
    });
};
