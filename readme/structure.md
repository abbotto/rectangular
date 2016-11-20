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
│   │   │   ├── excuse.controller.js
│   │   │   ├── excuse.directive.js
│   │   │   ├── excuse.directive.tpl
│   │   │   ├── excuse.json
│   │   │   ├── excuse.scss
│   │   │   ├── excuse.tpl
│   │   │   ├── excuse.route.js
│   │   │   ├── excuse.service.js
│   │   │   └── test
│   │   │       ├── spec.excuse.controller.js
│   │   │       ├── spec.excuse.directive.js
│   │   │       └── spec.excuse.service.js
│   │   ├── home
│   │   │   ├── home.scss
│   │   │   ├── home.tpl
│   │   │   └── home.route.js
│   │   ├── controller.js
│   │   ├── route.js
│   │   ├── service.js
│   │   └── core
│   │       ├── locale
│   │       │   └── locale.service.js
│   │       ├── master
│   │       │   ├── master.controller.js
│   │       │   ├── master.scss
│   │       │   └── master.tpl
│   │       ├── model
│   │       │   └── model.service.js
│   │       ├── promise
│   │       │   └── promise.service.js
│   │       ├── ui
│   │       │   ├── ui.service.bottomSheet.js
│   │       │   ├── ui.service.colors.js
│   │       │   ├── ui.service.dialog.js
│   │       │   ├── ui.service.icon.js
│   │       │   ├── ui.service.inkRipple.js
│   │       │   ├── ui.service.js
│   │       │   ├── ui.service.media.js
│   │       │   ├── ui.service.panel.js
│   │       │   ├── ui.service.sidenav.js
│   │       │   ├── ui.service.sticky.js
│   │       │   └── ui.toast.service.js
│   │       └── vendor
│   │           ├── angular-translate
│   │           │   └── translate.vendor.service.js
│   │           ├── bluebird
│   │           │   └── bluebird.vendor.service.js
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