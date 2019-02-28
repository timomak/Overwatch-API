'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStandings = exports.getSchedule = exports.getLiveMatch = undefined;

var _live = require('./live');

var _live2 = _interopRequireDefault(_live);

var _schedule = require('./schedule');

var _schedule2 = _interopRequireDefault(_schedule);

var _standings = require('./standings');

var _standings2 = _interopRequireDefault(_standings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getLiveMatch = _live2.default;
exports.getSchedule = _schedule2.default;
exports.getStandings = _standings2.default;