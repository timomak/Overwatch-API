const Hero = require('./hero.model')
var heroesModel = require('./heroes')


function onInsert(err, docs) {
    if (err) {
        // TODO: handle error
    } else {
        console.info('%d potatoes were successfully stored.', docs.length);
    }
}

module.exports = function (app) {
  // Get all heroes
  app.get("/heroes", function (req, res) {
    Hero.find()
        .then(hero => {
            res.send(hero);
        })
        .catch(err => {
            console.log(err.message);
        });
  });

  // Get Specific hero by target
  app.get("/heroes/:tag", function (req, res) {
    // res.send(req.params.heroName)

    Hero.find({tag: req.params.tag})
        .then(hero => {
            res.send(hero);
        })
        .catch(err => {
            console.log(err.message);
        });
  });

  // Base url
  app.get("/", function (req, res) {
    // console.log("heroesModel")
    res.send({
      "allHeroes":"https://best-overwatch-api.herokuapp.com/heroes",
      "player":"https://best-overwatch-api.herokuapp.com/player"
    })
  });

  // Run this to add the heroes.js file to Moongoose
  app.get("/add", function (req, res) {
    // console.log("heroesModel")
    // res.send(heroesModel)
    if (req.user) {
      // Delete all the current objects from Hero database
      Hero.remove({}, callback)

      // MARK: Code to save heroes from heroesModel
      Hero.collection.insert(heroesModel, onInsert);
    }
    else {
      return res.status(401); // UNAUTHORIZED
    }
  });
};
