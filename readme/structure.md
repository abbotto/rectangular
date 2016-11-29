## Structure

### Functional File Structure (FFS)
- Basically, files are organized according to what they are used for and folders are kept as flat as possible.
	- For example, the demo `excuse` component is located here: `src/client/component/excuse/`.
	- It's directives, models, view, route, and styles are all in the same directory.
	- Now you can save your fingers from years of scrolling hell!

```
.
src
├── client
│   ├── component
│   │   └── home
│   │       ├── home.component.html
│   │       ├── home.component.js
│   │       └── home.route.js
│   ├── core
│   │   ├── design
│   │   │   ├── font
│   │   │   ├── image
│   │   │   └── style
│   │   │       ├── app.scaffold.scss
│   │   │       └── vendor.scaffold.scss
│   │   ├── model
│   │   │   └── app.data.json
│   │   ├── service
│   │   │   ├── locale
│   │   │   │   └── locale.service.js
│   │   │   ├── model
│   │   │   │   ├── mixin.service.js
│   │   │   │   └── model.service.js
│   │   │   ├── promise
│   │   │   │   └── promise.service.js
│   │   │   ├── rest
│   │   │   │   └── rest.service.js
│   │   │   ├── ui
│   │   │   │   ├── ui.bottomSheet.service.js
│   │   │   │   ├── ui.colors.service.js
│   │   │   │   ├── ui.dialog.service.js
│   │   │   │   ├── ui.icon.service.js
│   │   │   │   ├── ui.inkRipple.service.js
│   │   │   │   ├── ui.media.service.js
│   │   │   │   ├── ui.panel.service.js
│   │   │   │   ├── ui.service.js
│   │   │   │   ├── ui.sidenav.service.js
│   │   │   │   ├── ui.sticky.service.js
│   │   │   │   └── ui.toast.service.js
│   │   │   └── upload
│   │   │       └── upload.service.js
│   │   └── view
│   │       ├── view.html
│   │       └── view.scss
│   ├── extension
│   │   ├── angular-translate
│   │   │   └── translate.extension.js
│   │   ├── bluebird
│   │   │   └── bluebird.extension.js
│   │   ├── file-upload
│   │   │   └── upload.extension.js
│   │   ├── lodash
│   │   │   └── lodash.extension.js
│   │   ├── moment
│   │   │   └── moment.extension.js
│   │   └── restangular
│   │       └── restangular.extension.js
│   ├── registry
│   │   ├── app.js
│   │   ├── app.route.js
│   │   └── app.service.js
│   └── spec
│       └── config.spec.js
└── server
    └── core.js

```
