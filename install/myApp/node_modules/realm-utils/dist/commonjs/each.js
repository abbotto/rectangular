"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var utils_1 = require('./utils');
exports.Each = function (argv, cb) {
    return new Promise(function (resolve, reject) {
        var results = [];
        var isObject = utils_1.Utils.isPlainObject(argv);
        var isMap = utils_1.Utils.isMap(argv);
        var isSet = utils_1.Utils.isSet(argv);
        if (!argv) {
            return resolve(results);
        }
        if (isMap || isSet) {
            var _ret = function () {
                var iterator = void 0;
                if (isMap) {
                    var map = argv;
                    iterator = map.entries();
                }
                if (isSet) {
                    var set = argv;
                    iterator = set.values();
                }
                var index = -1;
                var iterateMap = function iterateMap(data) {
                    index++;
                    if (data.done) {
                        return resolve(results);
                    }
                    var k = void 0,
                        v = void 0,
                        res = void 0;
                    if (isMap) {
                        var _data$value = _slicedToArray(data.value, 2);

                        k = _data$value[0];
                        v = _data$value[1];

                        res = cb.apply(undefined, [v, k]);
                    }
                    if (isSet) {
                        v = data.value;
                        res = cb(v);
                    }
                    if (utils_1.Utils.isPromise(res)) {
                        res.then(function (a) {
                            results.push(a);
                            iterateMap(iterator.next());
                        }).catch(reject);
                    } else {
                        results.push(res);
                        iterateMap(iterator.next());
                    }
                };
                iterateMap(iterator.next());
                return {
                    v: void 0
                };
            }();

            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
        }
        var dataLength = isObject ? Object.keys(argv).length : argv.length;
        var index = -1;
        var iterate = function iterate() {
            index++;
            if (index < dataLength) {
                var key = isObject ? Object.keys(argv)[index] : index;
                var value = isObject ? argv[key] : argv[index];
                if (utils_1.Utils.isPromise(value)) {
                    value.then(function (data) {
                        results.push(data);iterate();
                    }).catch(reject);
                } else {
                    var res = cb.apply(undefined, [value, key]);
                    if (utils_1.Utils.isPromise(res)) {
                        res.then(function (a) {
                            results.push(a);
                            iterate();
                        }).catch(reject);
                    } else {
                        results.push(res);
                        iterate();
                    }
                }
            } else return resolve(results);
        };
        return iterate();
    });
};