'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.owl = exports.getStats = exports.getProfile = undefined;

var _parser = require('./parser');

var _owl = require('./owl');

var owl = { getLiveMatch: _owl.getLiveMatch, getSchedule: _owl.getSchedule, getStandings: _owl.getStandings };

exports.getProfile = _parser.getProfile;
exports.getStats = _parser.getStats;
exports.owl = owl;