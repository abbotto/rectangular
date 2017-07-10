(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("app/index.js", function(exports, require, module, __filename, __dirname){

"use strict";var _route=require("~/app/route.js");var _route2=_interopRequireDefault(_route);var _service=require("~/app/service.js");var _service2=_interopRequireDefault(_service);var _envAuto=require("~/tmp/env.auto.js");var _envAuto2=_interopRequireDefault(_envAuto);var _templateAuto=require("~/tmp/template.auto.js");var _templateAuto2=_interopRequireDefault(_templateAuto);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Auto-generated files
angular.module("app",[_envAuto2.default.name,_route2.default.name,_service2.default.name,_templateAuto2.default.name,"ngAnimate","ngAria","ngMessages","ngSanitize"]).config(function($locationProvider){$locationProvider.html5Mode(true);}).config(function($logProvider,NODE_ENV){NODE_ENV==="development"&&$logProvider.debugEnabled(true);});
});
___scope___.file("app/route.js", function(exports, require, module, __filename, __dirname){

"use strict";// Auto-generated file
Object.defineProperty(exports,"__esModule",{value:true});var _routeAuto=require("../tmp/route.auto.js");var _routeAuto2=_interopRequireDefault(_routeAuto);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=angular.module("route",["ui.router",_routeAuto2.default.name]).config(function($urlRouterProvider){$urlRouterProvider.otherwise("/");});
});
___scope___.file("tmp/route.auto.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _homeRoute=require("~/app/component/home/home.route.js");var _homeRoute2=_interopRequireDefault(_homeRoute);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=angular.module("route.auto",[_homeRoute2.default.name]);
});
___scope___.file("app/component/home/home.route.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _homeComponent=require("~/app/component/home/home.component.js");var _homeComponent2=_interopRequireDefault(_homeComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=angular.module("home.route",[_homeComponent2.default.name]).config(function($stateProvider){$stateProvider.state("home",{url:"/",template:"<home></home>"});});
});
___scope___.file("app/component/home/home.component.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _componentDirective=require("~/app/extension/component/component.directive.js");var _componentDirective2=_interopRequireDefault(_componentDirective);var _dataService=require("~/app/extension/data/data.service.js");var _dataService2=_interopRequireDefault(_dataService);var _homeController=require("~/app/component/home/home.controller.js");var _homeController2=_interopRequireDefault(_homeController);var _homeComponent=require("~/app/component/home/home.component.html");var _homeComponent2=_interopRequireDefault(_homeComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// --------------------------------
// Home Component (AngularJS)
// --------------------------------
var HomeComponent={};HomeComponent.controllerAs="vm";HomeComponent.template=_homeComponent2.default.default;HomeComponent.controller=_homeController2.default;console.log("homectrl",_homeController2.default);exports.default=angular.module("home.component",[_componentDirective2.default.name,_dataService2.default.name]).component("home",HomeComponent);
});
___scope___.file("app/extension/component/component.directive.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _componentService=require("~/app/extension/component/component.service.js");var _componentService2=_interopRequireDefault(_componentService);var _reactVendorDirective=require("~/app/extension/component/react.vendor.directive.js");var _reactVendorDirective2=_interopRequireDefault(_reactVendorDirective);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=angular.module("component.directive",[_componentService2.default.name]).directive("component",_reactVendorDirective2.default);
});
___scope___.file("app/extension/component/component.service.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _reactVendorService=require("~/app/extension/component/react.vendor.service.js");var _reactVendorService2=_interopRequireDefault(_reactVendorService);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=angular.module("component.service",[]).factory("component$",_reactVendorService2.default);
});
___scope___.file("app/extension/component/react.vendor.service.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=reactVendorService;var component$={};function reactVendorService($rootScope){component$.render=function(name,model){$rootScope[name]=model;};return component$;};
});
___scope___.file("app/extension/component/react.vendor.directive.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=reactVendorDrective;var _react=require("react");var _reactDom=require("react-dom");var _reactJsx=require("react-jsx");function reactVendorDrective($rootScope,$templateCache){return{scope:{name:"="},link:function link(scope,element){var unmountReactElement=function unmountReactElement(){delete $rootScope[scope.name];(0,_react.unmountComponentAtNode)(element[0]);};// Render React element
var renderReactComponent=function renderReactComponent(component){(0,_reactDom.render)(component,element[0]);};var scopeWatchCb=function scopeWatchCb(nv){if(nv){var data={};data[nv.alias||"vm"]=nv;// Convert JSX to React element
var component=(0,_reactJsx.client)($templateCache.get(data.vm.templateUrl),{});renderReactComponent(component(data));}};var rootScopeWatchCb=function rootScopeWatchCb(nv){if(nv)scope[scope.name]=nv;};var scopeWatch=scope.$watch(scope.name,scopeWatchCb,true);var rootScopeWatch=$rootScope.$watch(scope.name,rootScopeWatchCb,true);// Manually unmount the React component
// when the scope is destroyed.
scope.$on("$destroy",unmountReactElement);}};};
});
___scope___.file("app/extension/data/data.service.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _immutableVendorService=require("~/app/extension/data/immutable.vendor.service.js");var _immutableVendorService2=_interopRequireDefault(_immutableVendorService);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=angular.module("data.service",[]).factory("data$",_immutableVendorService2.default);
});
___scope___.file("app/extension/data/immutable.vendor.service.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=immutableVendorService;var _immutable=require("immutable");var _immutable2=_interopRequireDefault(_immutable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function immutableVendorService(){return _immutable2.default;};
});
___scope___.file("app/component/home/home.controller.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=HomeComponentController;var _todoListComponent=require("~/app/component/todo-list/todo-list.component.js");var _todoListComponent2=_interopRequireDefault(_todoListComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function HomeComponentController(component$,data$){var vm=this;vm.projectName="Rectangular";// Initialize TodoList component
(0,_todoListComponent2.default)(component$,vm,data$);};
});
___scope___.file("app/component/todo-list/todo-list.component.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=TodoListComponent;// --------------------------------
// Todo-List Component (ReactJS)
// --------------------------------
function TodoListComponent(component$,model,data$){model.TodoList={};model.TodoList.alias="vm";model.TodoList.templateUrl="app/component/todo-list/todo-list.component.jsx";// Immutable todo list
model.TodoList.todo=data$.fromJS(["get groceries","mow the lawn","be a ninja"]);// Updated by TodoList parent (HomeComponentController)
model.newTodoListItem="";// Called by TodoList parent (HomeComponentController)
model.updateTodoList=function(){if(model.newTodoListItem.length){model.TodoList.todo=model.TodoList.todo.push(model.newTodoListItem);}// Render the TodoList component
component$.render("TodoList",model.TodoList);};model.updateTodoList();};
});
___scope___.file("app/component/home/home.component.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<div id=\"home-component\">\n\t<h1 id=\"rectangular\">\n\t\t<a href='https://github.com/abbotto/rectangular'>{{vm.projectName}}</a>\n\t</h1>\n\t\n\t<p>\n\t\t<a href='https://travis-ci.org/abbotto/rectangular'>\n\t\t\t<img src='https://travis-ci.org/abbotto/rectangular.svg?branch=master' alt='Build Status' />\n\t\t</a>\n\t</p>\n\t\n\t<hr/>\n\t\n\t<h2>Basic Example</h2>\n\t\n\t<h3>Todo List</h3>\n\t\n\t<input ng-model=\"vm.newTodoListItem\" type=\"text\" placeholder=\"Angular Input\"/>\n\t<button ng-click=\"vm.updateTodoList()\">Update List</button>\n\t<br/><br/>\n\t\n\t<strong>React Output w/ Immutable Data</strong><br>\n\t<component name=\"'TodoList'\"></component>\n</div>\n"
});
___scope___.file("app/service.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=angular.module("service",[]);
});
___scope___.file("tmp/env.auto.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=angular.module("env.auto",[]).constant("APP_NAME","Rectangular").constant("LANGUAGE","en").constant("NODE_ENV","development").constant("PORT",8088);
});
___scope___.file("tmp/template.auto.js", function(exports, require, module, __filename, __dirname){

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=angular.module("template.auto",[]).run(function($templateCache){$templateCache.put("app/component/home/home.component.html","<div id=\"home-component\">\n<h1 id=\"rectangular\">\n<a href='https://github.com/abbotto/rectangular'>{{vm.projectName}}</a>\n</h1>\n<p>\n<a href='https://travis-ci.org/abbotto/rectangular'>\n<img src='https://travis-ci.org/abbotto/rectangular.svg?branch=master' alt='Build Status' />\n</a>\n</p>\n<hr/>\n<h2>Basic Example</h2>\n<h3>Todo List</h3>\n<input ng-model=\"vm.newTodoListItem\" type=\"text\" placeholder=\"Angular Input\"/>\n<button ng-click=\"vm.updateTodoList()\">Update List</button>\n<br/><br/>\n<strong>React Output w/ Immutable Data</strong><br>\n<component name=\"'TodoList'\"></component>\n</div>");$templateCache.put("app/component/todo-list/todo-list.component.jsx","<div id=\"TodoList\">\n\t<ul>\n\t\t{vm.todo.map(\n\t\t\t(value) => <li>{value}</li>\n\t\t)}\n\t</ul>\n</div>;\n");});
});
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient;
exports.connect = function (port, uri) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === 'js') {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
        if (data.type === 'css' && __fsbx_css) {
            __fsbx_css(data.path, data.content);
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.import("fusebox-hot-reload").connect(4444, "")

FuseBox.import("default/app/index.js");
FuseBox.main("default/app/index.js");
})
(FuseBox)
//# sourceMappingURL=app.js.map