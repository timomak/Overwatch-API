'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cb) {
  var url = 'https://api.overwatchleague.com/v2/standings';

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
  var includes = ['id', 'divisionId', 'name', 'abbreviatedName', 'league', 'stages', 'preseason'];

  // Filter only the properties we want to use.
  var filtered = data.map(function (o) {
    return Object.keys(o).filter(function (key) {
      return includes.includes(key);
    }).reduce(function (obj, key) {
      obj[key] = o[key];
      return obj;
    }, {});
  });
  return filtered;
}