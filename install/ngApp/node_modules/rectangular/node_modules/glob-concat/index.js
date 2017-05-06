#!/usr/bin/env node
'use strict';

// Copyright 2015 Neil Freeman
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

var glob = require('glob');
var async = require('async');

module.exports = mergeGlob;

function mergeGlob(list, options, callback) {
    if (typeof(options) === 'function') {
        callback = options;
        options = null;
    }

    if (!Array.isArray(list)) list = [list];

    async.map(list, function(item, cb) {
        glob(item, options, cb);
    }, function(err, result) {
        var list = Array.prototype.concat.apply([], result);
        list = list.filter(function(e, pos) { return list.indexOf(e) === pos; });
        callback(err, list);
    });
}

mergeGlob.sync = function(list, options) {
    options = options || {};

    if (!Array.isArray(list)) list = [list];

    list = list.map(function(pat) {
        return glob.sync(pat, options);
    });

    list = Array.prototype.concat.apply([], list);

    return list.filter(function(e, pos) {
        return list.indexOf(e) === pos;
    });
}
