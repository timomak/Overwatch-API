const overwatch = require('overwatch-api');

// const platform = 'pc';
// const region = 'us';
// const tag = 'GamersCCCP-1569';

module.exports = function (app) {
  app.get("/player/:platform/:region/:tag", function (req, res) {
    overwatch.getProfile(req.params.platform, req.params.region, req.params.tag, (err, json) => {
      if (err) res.send(err);
      else res.send(json);
    });
  });
}
