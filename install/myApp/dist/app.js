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
var HomeComponent={};HomeComponent.controllerAs="vm";HomeComponent.template=_homeComponent2.default.default;HomeComponent.controller=_homeController2.default;console.log("homec",_homeController2.default);exports.default=angular.module("home.component",[_componentDirective2.default.name,_dataService2.default.name]).component("home",HomeComponent);
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

FuseBox.import("default/app/index.js");
FuseBox.main("default/app/index.js");
})
(FuseBox)
//# sourceMappingURL=app.js.map