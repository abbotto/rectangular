module.exports = { contents: "\"use strict\";Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=angular.module(\"template.auto\",[]).run(function($templateCache){$templateCache.put(\"app/component/home/home.component.html\",\"<div id=\\\"home-component\\\">\\n<h1 id=\\\"rectangular\\\">\\n<a href='https://github.com/abbotto/rectangular'>{{vm.projectName}}</a>\\n</h1>\\n<p>\\n<a href='https://travis-ci.org/abbotto/rectangular'>\\n<img src='https://travis-ci.org/abbotto/rectangular.svg?branch=master' alt='Build Status' />\\n</a>\\n</p>\\n<hr/>\\n<h2>Basic Example</h2>\\n<h3>Todo List</h3>\\n<input ng-model=\\\"vm.newTodoListItem\\\" type=\\\"text\\\" placeholder=\\\"Angular Input\\\"/>\\n<button ng-click=\\\"vm.updateTodoList()\\\">Update List</button>\\n<br/><br/>\\n<strong>React Output w/ Immutable Data!</strong><br>\\n<component name=\\\"'TodoList'\\\"></component>\\n</div>\");$templateCache.put(\"app/component/todo-list/todo-list.component.jsx\",\"<div id=\\\"TodoList\\\">\\n\\t<ul>\\n\\t\\t{vm.todo.map(\\n\\t\\t\\t(value) => <li>{value}</li>\\n\\t\\t)}\\n\\t</ul>\\n</div>;\\n\");});",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1499885739000,
devLibsRequired : undefined
};