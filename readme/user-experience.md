## User Experience

### [Rectangular UI](https://github.com/abbotto/rectangular-ui.git)
 
 - Services are called via `ui.*.service`.
 
#### Material Design
- Material Design functionality is added via `Angular Material`.
- Learn more about `angular-material` [here](https://material.angularjs.org/latest/).

#### Install Material Design

- Copy the following folders into `rectangular` via `app/client/`.
	- `rectangular-ui/material-design/app/extension`
	- `rectangular-ui/material-design/app/shared`
- Inject `ui.material.service` into `rectangular` via `app/client/app.service.js`
- Run `npm i angular-material` inside of `rectangular`.
- Add `"./node_modules/angular-material/angular-material.min.js"` to `dev/task/asset/vendor.js.json` in `rectangular`.
- Add `"./node_modules/angular-material/angular-material.min.css"` to `dev/task/asset/vendor.scss.json` in `rectangular`.

##### Integrated Services
- Called via `ui.bottomSheet.service` and injected via `bottomSheet$`.
- Called via `ui.colors.service` and injected via `colors$`.
- Called via `ui.dialog.service` and injected via `dialog$`.
- Called via `ui.icon.service` and injected via `icon$`.
- Called via `ui.inkRipple.service` and injected via `inkRipple$`.
- Called via `ui.media.service` and injected via `media$`.
- Called via `ui.panel.service` and injected via `panel$`.
- Called via `ui.sidenav.service` and injected via `sidenav$`.
- Called via `ui.sticky.service` and injected via `sticky$`.
- Called via `ui.toast.service` and injected via `toast$`.

#### Bootstrap
- Bootstrap functionality is added via `Angular Strap`.
- Learn more about `angular-strap` [here](https://mgcrea.github.io/angular-strap/).

##### Integrated Services
- Called via `ui.affix.service` and injected via `affix$`.
- Called via `ui.alert.service` and injected via `alert$`.
- Called via `ui.datepicker.service` and injected via `datepicker$`.
- Called via `ui.dropdown.service` and injected via `dropdown$`.
- Called via `ui.modal.service` and injected via `modal$`.
- Called via `ui.popover.service` and injected via `popover$`.
- Called via `ui.scrollspy.service` and injected via `scrollspy$`.
- Called via `ui.select.service` and injected via `select$`.
- Called via `ui.timepicker.service` and injected via `timepicker$`.
- Called via `ui.tooltip.service` and injected via `tooltip$`.
- Called via `ui.typeahead.service` and injected via `typeahead$`.

##### Install Bootstrap

- Copy the following folders into `rectangular` via `app/client/`.
	- `rectangular-ui/bootstrap/app/extension`
	- `rectangular-ui/bootstrap/app/shared`
- Inject `ui.bootstrap.service` into `rectangular` via `app/client/app.service.js`
- Run `npm i bootstrap angular-strap` inside of `rectangular`.
- Add the following to `dev/task/asset/vendor.js.json` in `rectangular`.
	- `"./node_modules/angular-strap/dist/angular-strap.min.js"` 
	- `"./node_modules/angular-strap/dist/angular-strap.tpl.min.js"` 
- Add the following to `dev/task/asset/vendor.scss.json` in `rectangular`.
	- `"./node_modules/bootstrap/dist/css/bootstrap.min.js"`.
	- `"./node_modules/bootstrap/dist/css/bootstrap-theme.min.js"`.

#### Animations
- The `ngAnimate` module provides support for CSS-based and JavaScript-based animations.
- Learn more about `ngAnimate` [here](https://docs.angularjs.org/api/ngAnimate).

#### Messages
- The `ngMessage` module commonly is to display error messages for inputs.
- Learn more about `ngMessage` [here](https://docs.angularjs.org/api/ngMessages).

#### Sanitize
- The `ngSanitize` module provides functionality to sanitize HTML.
- Learn more about `ngSanitize` [here](https://docs.angularjs.org/api/ngSanitize).

#### Assistive Technology
- The `ngAria` module provides support for common ARIA attributes used in assistive technologies.
- Learn more about `ngAria` [here](https://docs.angularjs.org/api/ngAria).

#### Language Support
- Called via `locale.service` and injected via `locale$`.
- Translations are handled via `angular-translate`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/).
