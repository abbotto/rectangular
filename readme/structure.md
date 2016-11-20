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
│   │   ├── core
│   │   │   ├── locale
│   │   │   │   └── locale.service.js
│   │   │   ├── master
│   │   │   │   ├── master.controller.js
│   │   │   │   ├── master.scss
│   │   │   │   └── master.tpl
│   │   │   ├── model
│   │   │   │   └── model.service.js
│   │   │   ├── promise
│   │   │   │   └── promise.service.js
│   │   │   ├── ui
│   │   │   │   ├── ui.bottomSheet.service.js
│   │   │   │   ├── ui.colors.service.js
│   │   │   │   ├── ui.dialog.service.js
│   │   │   │   ├── ui.icon.service.js
│   │   │   │   ├── ui.inkRipple.service.js
│   │   │   │   ├── ui.media.service.js
│   │   │   │   ├── ui.panel.service.js
│   │   │   │   ├── ui.service.js
│   │   │   │   ├── ui.sidenav.service.js
│   │   │   │   ├── ui.sticky.service.js
│   │   │   │   └── ui.toast.service.js
│   │   │   └── vendor
│   │   │       ├── angular-translate
│   │   │       │   └── translate.vendor.service.js
│   │   │       ├── bluebird
│   │   │       │   └── bluebird.vendor.service.js
│   │   │       ├── lodash
│   │   │       │   └── lodash.vendor.service.js
│   │   │       └── moment
│   │   │           └── moment.vendor.service.js
│   │   ├── excuse
│   │   │   ├── excuse.controller.js
│   │   │   ├── excuse.directive.js
│   │   │   ├── excuse.directive.tpl
│   │   │   ├── excuse.json
│   │   │   ├── excuse.route.js
│   │   │   ├── excuse.scss
│   │   │   ├── excuse.service.js
│   │   │   └── excuse.tpl
│   │   └── home
│   │       ├── home.route.js
│   │       ├── home.scss
│   │       └── home.tpl
│   ├── design
│   │   ├── font
│   │   ├── image
│   │   └── style
│   │       ├── scaffold.scss
│   │       └── vendor.scaffold.scss
│   └── registry
│       ├── app.controller.js
│       ├── app.js
│       ├── app.route.js
│       └── app.service.js
└── server
    └── core.js

```

### Index Naming Convention
- Never name a file `src/**/index.ext` unless you are evil or it is an actual index for something.