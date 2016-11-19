## Structure

### Functional File Structure (FFS)
- Basically, files are organized according to what they are used for.
	- For example, the demo `excuse` component is located here: `src/client/component/excuse/`.
	- It's directives, models, template, route, controller, and styles are all in the same directory as the view.
	- Now you can save your fingers from years of scrolling hell!

```
.
src
├── client
│   ├── component
│   │   ├── excuse
│   │   │   ├── controller.excuse.js
│   │   │   ├── directive.excuse.js
│   │   │   ├── directive.excuse.tpl
│   │   │   ├── excuse.json
│   │   │   ├── excuse.scss
│   │   │   ├── excuse.tpl
│   │   │   ├── route.excuse.js
│   │   │   ├── service.excuse.js
│   │   │   └── test
│   │   │       ├── spec.controller.excuse.js
│   │   │       ├── spec.directive.excuse.js
│   │   │       └── spec.service.excuse.js
│   │   ├── home
│   │   │   ├── home.scss
│   │   │   ├── home.tpl
│   │   │   └── route.home.js
│   │   ├── controller.component.js
│   │   ├── route.component.js
│   │   ├── service.component.js
│   │   └── core
│   │       ├── locale
│   │       │   └── service.locale.js
│   │       ├── master
│   │       │   ├── controller.master.js
│   │       │   ├── master.scss
│   │       │   └── master.tpl
│   │       ├── model
│   │       │   └── service.model.js
│   │       ├── promise
│   │       │   └── service.promise.js
│   │       ├── ui
│   │       │   ├── service.ui.bottomSheet.js
│   │       │   ├── service.ui.colors.js
│   │       │   ├── service.ui.dialog.js
│   │       │   ├── service.ui.icon.js
│   │       │   ├── service.ui.inkRipple.js
│   │       │   ├── service.ui.js
│   │       │   ├── service.ui.media.js
│   │       │   ├── service.ui.panel.js
│   │       │   ├── service.ui.sidenav.js
│   │       │   ├── service.ui.sticky.js
│   │       │   └── service.ui.toast.js
│   │       └── vendor
│   │           ├── angular-translate
│   │           │   └── service.vendor.translate.js
│   │           ├── bluebird
│   │           │   └── service.vendor.bluebird.js
│   │           ├── lodash
│   │           │   └── service.vendor.lodash.js
│   │           └── moment
│   │               └── service.vendor.moment.js
│   ├── design
│   │   ├── font
│   │   ├── image
│   │   └── style
│   │       ├── scaffold.scss
│   │       └── vendor.scaffold.scss
│   └── registry
│       ├── module.app.js
│       ├── module.controller.js
│       ├── module.route.js
│       └── module.service.js
└── server
	└── core.js
```

### Index Naming Convention
- Never name a file `src/**/index.ext` unless you are evil or it is an actual index for something.