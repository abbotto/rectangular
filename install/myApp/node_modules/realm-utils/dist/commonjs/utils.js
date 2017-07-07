"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var funcProto = Function.prototype;
var objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
var objectTag = '[object Object]';
var funcTag = '[object Function]';
var funcTag2 = '[Function]';
var genTag = '[object GeneratorFunction]';

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'isPromise',
        value: function isPromise(item) {
            return item && typeof item.then === 'function' && typeof item.catch === 'function';
        }
    }, {
        key: 'isNotSet',
        value: function isNotSet(input) {
            return input === undefined || input === null;
        }
    }, {
        key: 'isMap',
        value: function isMap(input) {
            if (typeof Map === "undefined") {
                return false;
            }
            return input instanceof Map;
        }
    }, {
        key: 'isSet',
        value: function isSet(input) {
            if (typeof Set === "undefined") {
                return false;
            }
            return input instanceof Set;
        }
    }, {
        key: 'isFunction',
        value: function isFunction(value) {
            var tag = this.isObject(value) ? objectToString.call(value) : '';
            return tag === funcTag2 || tag == funcTag || tag == genTag;
        }
    }, {
        key: 'isObject',
        value: function isObject(input) {
            var type = typeof input === 'undefined' ? 'undefined' : _typeof(input);
            return !!input && (type == 'object' || type == 'function');
        }
    }, {
        key: 'isHostObject',
        value: function isHostObject(value) {
            var result = false;
            if (value != null && typeof value.toString != 'function') {
                try {
                    result = !!(value + '');
                } catch (e) {}
            }
            return result;
        }
    }, {
        key: 'overArg',
        value: function overArg(func, transform) {
            return function (arg) {
                return func(transform(arg));
            };
        }
    }, {
        key: 'isObjectLike',
        value: function isObjectLike(value) {
            return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
        }
    }, {
        key: 'flatten',
        value: function flatten(data) {
            return [].concat.apply([], data);
        }
    }, {
        key: 'setHiddenProperty',
        value: function setHiddenProperty(obj, key, value) {
            Object.defineProperty(obj, key, {
                enumerable: false,
                value: value
            });
            return value;
        }
    }, {
        key: 'isString',
        value: function isString(value) {
            return typeof value === 'string';
        }
    }, {
        key: 'isArray',
        value: function isArray(input) {
            return Array.isArray(input);
        }
    }, {
        key: 'isPlainObject',
        value: function isPlainObject(value) {
            if (!this.isObjectLike(value) || objectToString.call(value) != objectTag || this.isHostObject(value)) {
                return false;
            }
            var proto = this.overArg(Object.getPrototypeOf, Object)(value);
            if (proto === null) {
                return true;
            }
            var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
            return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
    }, {
        key: 'getParameterNamesFromFunction',
        value: function getParameterNamesFromFunction(func) {
            var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
            var ARGUMENT_NAMES = /([^\s,]+)/g;
            var fnStr = func.toString().replace(STRIP_COMMENTS, '');
            var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
            if (result === null) result = [];
            return result;
        }
    }]);

    return Utils;
}();

exports.Utils = Utils;