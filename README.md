# Rectangular
An appkit for AngularJS developers.

---

## The Registry
- The registry is used for setting up configs and registering:
	- Controllers
	- Routes
	- Directives
	- Services


### App Modules
- App Modules are registerd in `src/client/registry/module.app.js`.
- All app modules are prefixed with `app`.

---

### Services
- Services are used for sending/receiving and manipulating data.
- Global service modules are registerd in `src/client/registry/module.service.js`.
- All service modules are prefixed with `service`.
- Services that belong in specific components should be prefixed with `service.{{component}}`.
- Services should be named in `UpperCamelCase` format.
- Built-in Angular services are prefixed with `$`. To keep things concise, other services should have a suffix of `$`.
	- Built-in: `$location`.
	- Other: `Weather$`.

---

### Controllers
- Controllers are used for passing around data provided by URL params and other means.
- Controller modules are registerd in `src/client/registry/module.controller.js`.
- All controller modules are prefixed with `controller`.
- Controllers should be named in `UpperCamelCase` format.

#### ViewModel

##### controllerAs syntax with vm

A consistent capture variable name has been chosen and it is called `vm`, which stands for `ViewModel`.

The `this` keyword is contextual and when used within a function inside a controller it may change it's context.

Capturing the context of this avoids encountering this problem.

**Example:**

	function ctrl() {
		var vm = this;
		vm.foo = {};
		vm.bar = function() { };
	}

---

### Directives
- Directives are used to control DOM behaviour and to render data in HTML format.
- Global directive modules are registerd in `src/client/registry/directive.module.js`.
- The structure of a directive template path is this: `{{component}}/directive.{{template}}.tpl`.
- All directive modules are prefixed with `directive`.
- Directives should be named in `lowerCamelCase` format.

---

### Routes
- Route modules are registerd in `src/client/registry/route.module.js`.
- The structure of a route path is this: `{{component}}/{{template}}.tpl`.
- All route modules are prefixed with `route`.

---

## Components
- Components can have one or many parts.
- Components should have a functional purpose.

### Primary Component Files
- Components are organized in directories comprised of any or all of the following files:
	- Directives (js)
	- Templates (tpl)
	- Routes (js)
	- Services (js)
	- Controllers (js)
	
### Supplementary Component Files
- These files should only be used if a primary file already exists in the given directory.
- Supplementary files are comprised of any or all of the following files:
	- Models (json)
	- Styles (scss)
	- Images (png, jpg, jpeg, gif, svg, ico)
	
## Public vs. Private Internals
- **Public** internals are parts of the app that can be used throughout the app by it's other parts.
	- Essentially, these are `inclusive` parts of the app.
	- An example of this would be the main SCSS file for your site: `src/client/public/design/style/scaffold.scss`.
	- Another example would be the language service: `service.vendor.language` found at `src/client/public/component/vendor/language/service.vendor.language.js`.

- **Private** internals are parts of the app that shouldn't be used throughout the app by it's other parts.
	- Essentially, these are `exclusive` parts of the app.
	- An example of this would be the controller for the main view for your app: `src/client/private/component/home/home.js`.

## Files by Functionality (FBF) Structure
- Basically, files are organized according to what they are used for.
	- For example, the demo `excuse` component is located here: `src/client/private/component/excuse/`.
	- It's directives, models, template, route, controller, and styles are all in the same directory as the view.
	- Now you can save your fingers from years of scrolling hell!
	
## Index Naming Convention
- Do not use it. It's cursed.
	- Never name a file `src/**/index.ext` unless you are evil or it is an actual index for something.

## Assets
- Asset paths are stored in `JSON` format in the `task` folder that is used by the task-runner.
- Currently, the asset files are called:
	- `task/vendor.js.json`
	- `task/source.js.json`
	- `task/vendor.scss.json`
	- `task/source.scss.json`

---

## Models
- Models should be stored in `JSON` format in the `component` directories.
- Models can be accessed via the `service.model` module and injected via `Model$`.
- A model can be accessed like this: `Model[{{component}}/{{model}}.json]`.

---

## Templates
- The structure of a template path is this: `{{component}}/{{template}}.tpl`.

**Example:**

	<ng-include src="'home/home.tpl'"></ng-include>

---

## Functions

### Named vs Anonymous Functions

Rectangular uses named functions instead of passing an anonymous function in as a callback.

This produces more readable code, is much easier to debug, and reduces the amount of nested callback code.

**Example:**

	angular
		.module('app')
		.controller('vmDashboard', vmDashboard() { })

---

## User Experience

### Material Design
- `Angular Material` has been integrated into `Rectangular` for building awesome app interfaces.
- Services are called via `service.ui.*`.
- Learn more about `angular-material` [here](https://material.angularjs.org/latest/).


- **Integrated Services**
	- Called via `service.ui.bottomSheet` and injected via `BottomSheet`.
	- Called via `service.ui.colors` and injected via `Colors`.
	- Called via `service.ui.dialog` and injected via `Dialog`.
	- Called via `service.ui.icon` and injected via `Icon`.
	- Called via `service.ui.inkRipple` and injected via `InkRipple`.
	- Called via `service.ui.media` and injected via `Media`.
	- Called via `service.ui.panel` and injected via `Panel`.
	- Called via `service.ui.sidenav` and injected via `Sidenav`.
	- Called via `service.ui.sticky` and injected via `Sticky`.
	- Called via `service.ui.toast` and injected via `Toast`.


### Animations
- Animations are handled via `ngAnimate`.
- Learn more about `ngAnimate` [here](https://docs.angularjs.org/api/ngAnimate).

### Messages
- HTML messages are handled via `ngMessage`.
- Learn more about `ngMessage` [here](https://docs.angularjs.org/api/ngMessages/directive.ngMessages).

### Assistive Technology
- Assistive technology support is handled via `ngAria`.
- Learn more about `ngAria` [here](https://docs.angularjs.org/api/ngAria).

### Language Support
- Called via `service.locale` and injected via `Language`.
- Translations are handled via `angular-translate`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/).

---

## Vendor Utilities

### MomentJS
- Called via `service.vendor.moment` and injected via `Moment$`.
- Learn more about `angularMoment` [here](https://github.com/urish/angular-moment).
- Learn more about `MomentJS` [here](http://momentjs.com/docs/).

### Lodash
- Called via `service.vendor.lodash` and injected via `Lodash$`.
- Learn more about `Lodash` [here](https://lodash.com/docs/4.16.6).

---

## Source files

### Server
The server-side files are kept in `src/server`.

### Client
The clent-side files are kept in `src/client`.

---

## Documentation
- Documentation can be generated via `ngDocs` by running `gulp compile-docs`.
- Learn more about `ngDocs` [here](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation).
- Learn more about `gulp-ngdocs` [here](https://github.com/nikhilmodak/gulp-ngdocs).

## Suggested Reading
- https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make
- https://scotch.io/tutorials/making-skinny-angularjs-controllers
