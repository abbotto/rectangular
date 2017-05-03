## Extensions
- Extensions consist of `3rd-party code` that is integrated into the app.

### Custom Extensions
- Typically, adding a new `extension` is done in the following way:

		(() => {
			"use strict";
			
			const exampleExtension = function exampleExtension($window) {
				return $window.exampleLibrary;
			};

			angular.module("example.extension", []).factory("example$", exampleExtension);
		})();

### Available Extensions

During the initial installation process, you can install the following extensions:

#### UI

##### Material Design
- Learn more about `angular-material` [here](https://material.angularjs.org/latest/).

###### Integrated Services
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

##### Bootstrap
- Learn more about `angular-strap` [here](https://mgcrea.github.io/angular-strap/).

###### Integrated Services
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

#### Arrays, Objects & Strings
- Called via `_.service` and injected via `_`.
- Learn more about `Lodash` [here](https://example.com/docs/4.16.6).

#### Date & Time
- Called via `date.service` and injected via `date$`.
- Learn more about `angularMoment` [here](https://github.com/urish/angular-moment).
- Learn more about `MomentJS` [here](http://momentjs.com/docs/).

#### REST
- Called via `rest.service` and injected via `rest$`.
- Learn more about `restangular` [here](https://github.com/mgonto/restangular).

#### Promises
- Called via `promise.service` and injected via `promise$`.
- Learn more about `bluebird` [here](https://github.com/petkaantonov/bluebird).

#### File Uploading
- Called via `upload.service` and injected via `upload$`.
- Learn more about `ng-file-upload` [here](https://github.com/danialfarid/ng-file-upload).

#### Language Support
- Called via `locale.service` and injected via `locale$`.
- Learn more about `angular-translate` [here](https://angular-translate.github.io/).

