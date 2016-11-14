# Rectangular
An appkit for AngularJS developers.

---

## Overview

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
- The structure of a template path is this: `{{component}}/{{template}}.html`.

**Example:**

	<ng-include src="'home/home.html'"></ng-include>

---

### Modules
- Application Modules are registerd in `src/client/public/modules/app.module.js`.
- All app modules are prefixed with `app`.

**Example:** A module for the app may be called `app.myModule`.

---

### Services
- Global service modules are registerd in `src/client/public/modules/service.module.js`.
- All service modules are prefixed with `service`.

**Example:** A module for a service may be called `service.myService`.

---

### Controllers
- Controller modules are registerd in `src/client/public/modules/controller.module.js`.
- All controller modules are prefixed with `controller`.

**Example:** A module for a service may be called `service.myController`.

---

### Directives
- Global directive modules are registerd in `src/client/public/modules/directive.module.js`.
- The structure of a directive template path is this: `{{component}}/directive/{{template}}.html`.
- All directive modules are prefixed with `directive`.

**Example:** A module for a service may be called `service.myDirective`.

---

### Routes
- Route modules are registerd in `src/client/public/modules/route.module.js`.
- The structure of a route path is this: `{{component}}/{{template}}.html`.
- All route modules are prefixed with `route`.

**Example:** A module for a service may be called `service.myDirective`.

---

### User Interface

#### Material Design
- `Angular Material` has been integrated into `Rectangular` for building awesome app interfaces.
- Services are called via `service.material.*`.
- Learn more about `angular-material` [here](https://material.angularjs.org/latest/).


- **Integrated Services**
	- Called via `service.material.bottomSheet` and injected via `BottomSheet`.
	- Called via `service.material.colors` and injected via `Colors`.
	- Called via `service.material.dialog` and injected via `Dialog`.
	- Called via `service.material.icon` and injected via `Icon`.
	- Called via `service.material.inkRipple` and injected via `InkRipple`.
	- Called via `service.material.media` and injected via `Media`.
	- Called via `service.material.panel` and injected via `Panel`.
	- Called via `service.material.sidenav` and injected via `Sidenav`.
	- Called via `service.material.sticky` and injected via `Sticky`.
	- Called via `service.material.toast` and injected via `Toast`.


#### Animations
- Animations are handled via `ngAnimate`.
- Learn more about `ngAnimate` [here](https://docs.angularjs.org/api/ngAnimate).

#### Messages
- HTML messages are handled via `ngMessage`.
- Learn more about `ngMessage` [here](https://docs.angularjs.org/api/ngMessages/directive/ngMessages).

#### Assistive Technology
- Assistive technology support is handled via `ngAria`.
- Learn more about `ngAria` [here](https://docs.angularjs.org/api/ngAria).

---

### Vendor Utilities

#### MomentJS
- Called via `service.vendor.moment` and injected via `moment`.
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
