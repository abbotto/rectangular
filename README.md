# Rectangular
An appkit for AngularJS developers.

---

## Overview of Build Conventions

### Modules
- Modules are used for setting up configs and registering:
	- Controllers
	- Routes
	- Directives
	- Services

### Components
- Components can have one or many parts.
- Components should have a functional purpose.

#### Primary Component Files
- Components are organized in directories comprised of any or all of the following files:
	- Directives (js)
	- Templates (tpl)
	- Routes (js)
	- Services (js)
	- Controllers (js)
	
#### Supplementary Component Files
- These files should only be used if a primary file already exists in the given directory.
- Supplementary files are comprised of any or all of the following files:
	- Models (json)
	- Styles (scss)
	- Images (png, jpg, jpeg, gif, svg, ico)
	
### Public vs. Private Internals
- **Public** internals are parts of the app that can be used throughout the app by it's other parts.
	- An example of this would be the main SCSS file for your site: `src/client/public/design/style/scaffold.scss`.
	- Another example would be the language service: `service.vendor.language` found at `src/client/public/component/vendor/language/service.vendor.language.js`.

- **Private** internals are parts of the app that shouldn't be used throughout the app by it's other parts.
	- Esentially, these are exclusive parts of the app.
	- An example of this would be the controller for the main view for your app: `src/client/private/component/home/home.js`.

### Files by Functionality (FBF) Structure
- Basically, files are organized according to what they are used for.
	- For example, the demo `excuse` component is located here: `src/client/private/component/excuse/`.
	- It's directives, models, template, route, controller, and styles are all in the same directory as the view.
	- Now you can save your fingers from years of scrolling hell!
	
### Index Naming Convention
- Do not use it. It's cursed.
	- Never name a file `src/**/index.ext` unless you are evil or it is an actual index for something.

### Assets
- Asset paths are stored in `JSON` format in the `task` folder that is used by the task-runner.
- Currently, the asset files are called:
	- `task/vendor.js.json`
	- `task/source.js.json`
	- `task/vendor.scss.json`
	- `task/source.scss.json`

---

### Models
- Models should be stored in `JSON` format in the `component` directories.
- Models can be accessed via the `service.model` module and injected via `Model`.
- A model can be accessed like this: `Modal[{{component}}/{{model}}.json]`.

---

### Templates
- The structure of a template path is this: `{{component}}/{{template}}.tpl`.

**Example:**

	<ng-include src="'home/home.tpl'"></ng-include>

---

### Modules
- Application Modules are registerd in `src/client/public/modules/app.module.js`.
- All app modules are prefixed with `app`.

**Example:** A module for the app may be called `app.myModule`.

---

### Services
- Services are used for sending/receiving and manipulating data.
- Global service modules are registerd in `src/client/public/modules/service.module.js`.
- All service modules are prefixed with `service`.
- Services that belong in specific components should be prefixed with `service.{{component}}`.

**Example:** A module for a service may be called `service.myService`.

---

### Controllers
- Controllers are used for passing around data provided by URL params and other means.
- Controller modules are registerd in `src/client/public/modules/controller.module.js`.
- All controller modules are prefixed with `controller`.

**Example:** A module for a service may be called `controller.myController`.

---

### Directives
- Directives are used control DOM behaviour and to render data in HTML.
- Global directive modules are registerd in `src/client/public/modules/directive.module.js`.
- The structure of a directive template path is this: `{{component}}/directive.{{template}}.tpl`.
- All directive modules are prefixed with `directive`.

**Example:** A module for a service may be called `service.myDirective`.

---

### Routes
- Route modules are registerd in `src/client/public/modules/route.module.js`.
- The structure of a route path is this: `{{component}}/{{template}}.tpl`.
- All route modules are prefixed with `route`.

**Example:** A module for a service may be called `service.myDirective`.

---

### User Interface

#### Material Design
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


#### Animations
- Animations are handled via `ngAnimate`.
- Learn more about `ngAnimate` [here](https://docs.angularjs.org/api/ngAnimate).

#### Messages
- HTML messages are handled via `ngMessage`.
- Learn more about `ngMessage` [here](https://docs.angularjs.org/api/ngMessages/directive.ngMessages).

#### Assistive Technology
- Assistive technology support is handled via `ngAria`.
- Learn more about `ngAria` [here](https://docs.angularjs.org/api/ngAria).

---

### Vendor Utilities

#### Angular Tranlsate
- Called via `service.vendor.language` and injected via `Language`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/).

#### MomentJS
- Called via `service.vendor.moment` and injected via `Moment`.
- Learn more about `angularMoment` [here](https://github.com/urish/angular-moment).
- Learn more about `MomentJS` [here](http://momentjs.com/docs/).

#### Lodash
- Called via `service.vendor.lodash` and injected via `_`.
- Learn more about `Lodash` [here](https://lodash.com/docs/4.16.6).

---
 
### Source files

#### Server
The server-side files are kept in `src/server`.

#### Client
The clent-side files are kept in `src/client`.

---

### Documentation
- Documentation is provided via `ngDocs` and can be compiled by running `gulp compile-docs`.
- Learn more about `ngDocs` [here](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation).
- Learn more about `gulp-ngdocs` [here](https://github.com/nikhilmodak/gulp-ngdocs).
