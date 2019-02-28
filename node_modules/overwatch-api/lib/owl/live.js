'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cb) {
  var url = 'https://api.overwatchleague.com/live-match';

  var options = {
    uri: encodeURI(url),
    encoding: 'utf8',
    json: true
  };

  (0, _requestPromise2.default)(options).then(function (resp) {
    var json = {
      data: transform(resp.data)
    };

    cb(null, json);
  }).catch(function (err) {
    cb(err);
  });
};

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transform(data) {
  var t = void 0;

  if (Object.getOwnPropertyNames(data.liveMatch).length === 0) {
    t = {
      liveMatch: {}
    };
    return t;
  }

  t = {
    liveMatch: {
      competitors: data.liveMatch.competitors.map(function (o) {
        return {
          name: o.name,
          primaryColor: o.primaryColor,
          secondaryColor: o.secondaryColor,
          abbreviatedName: o.abbreviatedName,
          logo: o.logo
        };
      }),
      scores: data.liveMatch.scores,
      status: data.liveMatch.status,
      games: data.liveMatch.games.map(function (o) {
        return {
          number: o.number,
          points: o.points,
          state: o.state,
          map: o.attributes.map
        };
      }),
      startDate: data.liveMatch.startDate,
      endDate: data.liveMatch.endDate,
      wins: data.liveMatch.wins,
      ties: data.liveMatch.ties,
      losses: data.liveMatch.losses,
      timeToMatch: data.liveMatch.timeToMatch,
      liveStatus: data.liveMatch.liveStatus
    }
  };
  return t;
}