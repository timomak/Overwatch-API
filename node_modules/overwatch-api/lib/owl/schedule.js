'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cb) {
  var url = 'https://api.overwatchleague.com/schedule';

  var options = {
    uri: encodeURI(url),
    encoding: 'utf8',
    json: true
  };

  (0, _requestPromise2.default)(options).then(function (resp) {
    var json = {
      data: resp.data
    };

    cb(null, json);
  }).catch(function (err) {
    cb(err);
  });
};

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }