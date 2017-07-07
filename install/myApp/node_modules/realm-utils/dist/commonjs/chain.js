"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils_1 = require('./utils');
var each_1 = require('./each');

var Chainable = function () {
    function Chainable() {
        _classCallCheck(this, Chainable);

        this.$finalized = false;
        this.$killed = false;
        this.$collection = {};
    }

    _createClass(Chainable, [{
        key: 'break',
        value: function _break(manual) {
            this.$finalized = true;
            this.$manual = manual;
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.$finalized = true;
            this.$killed = true;
        }
    }]);

    return Chainable;
}();

exports.Chainable = Chainable;
var ChainClassContructor = function ChainClassContructor(input) {
    if (input instanceof Chainable) {
        return input;
    }
    var instance = {};
    if (utils_1.Utils.isFunction(input)) {
        instance = new input();
        if (instance instanceof Chainable) {
            return instance;
        }
    } else if (utils_1.Utils.isObject(input)) {
        instance = input;
    } else {
        throw new Error("Chain requires a Class or an Instance");
    }
    instance['$collection'] = {};
    instance['break'] = function (manual) {
        utils_1.Utils.setHiddenProperty(instance, '$finalized', true);
        utils_1.Utils.setHiddenProperty(instance, '$manual', manual);
    };
    instance['kill'] = function () {
        utils_1.Utils.setHiddenProperty(instance, '$finalized', true);
        utils_1.Utils.setHiddenProperty(instance, '$killed', true);
    };
    return instance;
};
exports.Chain = function (cls) {
    var instance = ChainClassContructor(cls);
    var props = Object.getOwnPropertyNames(instance.constructor.prototype);
    var tasks = [];
    for (var i = 1; i < props.length; i++) {
        var propertyName = props[i];
        if (!(propertyName in ["format", 'kill', 'break'])) {
            var isSetter = propertyName.match(/^set(.*)$/);
            var setterName = null;
            if (isSetter) {
                setterName = isSetter[1];
                setterName = setterName.charAt(0).toLowerCase() + setterName.slice(1);
            }
            tasks.push({
                prop: propertyName,
                setter: setterName
            });
        }
    }
    var store = function store(prop, val) {
        instance.$collection[prop] = val;
        instance[prop] = val;
    };
    var evaluate = function evaluate(task) {
        var result = instance[task.prop].apply(instance);
        if (task.setter) {
            if (utils_1.Utils.isPromise(result)) {
                return result.then(function (res) {
                    store(task.setter, res);
                });
            } else store(task.setter, result);
        }
        return result;
    };
    return each_1.Each(tasks, function (task) {
        return !instance.$finalized ? evaluate(task) : false;
    }).then(function () {
        if (utils_1.Utils.isFunction(instance["format"])) {
            return evaluate({
                prop: "format"
            });
        }
    }).then(function (specialFormat) {
        if (instance.$killed) return;
        if (!instance.$manual) {
            if (specialFormat) return specialFormat;
            return instance.$collection;
        } else return instance.$manual;
    });
};